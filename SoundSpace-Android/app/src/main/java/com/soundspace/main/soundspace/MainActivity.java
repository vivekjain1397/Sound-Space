package com.soundspace.main.soundspace;

import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

import be.tarsos.dsp.AudioDispatcher;
import be.tarsos.dsp.AudioEvent;
import be.tarsos.dsp.AudioProcessor;
import be.tarsos.dsp.SilenceDetector;
import be.tarsos.dsp.io.android.AudioDispatcherFactory;
import be.tarsos.dsp.onsets.OnsetHandler;
import be.tarsos.dsp.onsets.PercussionOnsetDetector;
import be.tarsos.dsp.pitch.PitchDetectionHandler;
import be.tarsos.dsp.pitch.PitchDetectionResult;
import be.tarsos.dsp.pitch.PitchProcessor;


public class MainActivity extends ActionBarActivity implements AudioProcessor, OnsetHandler {

    SilenceDetector silenceDetector;
    double silenceThreshold = -50;

    double percussionTime;
    float pitch;
    double loudness;

    double baseLoudness = 0;
    boolean calibrateLoudness = true;
    double loudnessTotal = 0;
    int calibrateLoudCount = 0;

    //temp
    String playlist = "";

    long startTime = 0;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        int sampleRate = 22050;
        int bufferSize = 1024;//2014;
        int overlap = 0;


        //AudioDispatcher dispatcher = AudioDispatcherFactory.fromDefaultMicrophone(22050, 1024, 0);//original
        AudioDispatcher dispatcher = AudioDispatcherFactory.fromDefaultMicrophone(sampleRate, bufferSize, overlap);



        PitchDetectionHandler pdh = new PitchDetectionHandler() {
            @Override
            public void handlePitch(PitchDetectionResult result,AudioEvent e) {
                final float pitchInHz = result.getPitch();
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        //float n = pitchInHz;
                        pitch = pitchInHz;
                        if(pitch > 1700) {
                            playlist += " pitchLow(loud2) ";
                            sendSoundRequest("loud2");
                        }
                        else if (pitch > 1300) {
                            playlist += " pitchHigh(loud5) ";
                            sendSoundRequest("loud5");
                        }

                        //TextView text = (TextView) findViewById(R.id.hello);
                       // text.setText("p: " + pitchInHz);
                    }
                });
            }
        };
        AudioProcessor p = new PitchProcessor(PitchProcessor.PitchEstimationAlgorithm.FFT_YIN, 22050, 1024, pdh);
        dispatcher.addAudioProcessor(p);

        double sensitivity = 22;
        double threshold = 4;
        dispatcher.toString();
        dispatcher.addAudioProcessor(new PercussionOnsetDetector(sampleRate,
                bufferSize, this,sensitivity,threshold));


        silenceDetector = new SilenceDetector(silenceThreshold,false);
        dispatcher.addAudioProcessor(silenceDetector);
        dispatcher.addAudioProcessor(this);

        // run the dispatcher (on a new thread).
        new Thread(dispatcher,"Audio Dispatcher").start();


    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean process(AudioEvent audioEvent) {
        handleSound();
        return true;
    }

    private void handleSound(){
       loudness = silenceDetector.currentSPL();
        if(calibrateLoudness && loudness != Double.NEGATIVE_INFINITY)
        {
            loudnessTotal += loudness;
            calibrateLoudCount++;
            Log.v("loudness", ""+loudness);
            Log.v("loudCount", ""+calibrateLoudCount);
            Log.v("loudness Total", ""+loudnessTotal);

            if(calibrateLoudCount == 50)
            {
                Log.v("loudness Total Final", ""+loudnessTotal);
                baseLoudness = loudnessTotal/calibrateLoudCount;
                calibrateLoudness = false;
            }
            return;
        }

        if(loudness > (baseLoudness+26) ) {
            playlist += " loud5 ";
            sendSoundRequest("loud5");
        }
        else if(loudness > (baseLoudness+18)) {
            playlist += " loud4 ";
            sendSoundRequest("loud4");
        }
        else if(loudness > (baseLoudness+12)) {
            playlist += " loud3 ";
            sendSoundRequest("loud3");
        }
        else if(loudness < (baseLoudness-12)) {
            playlist += " loud1 ";
            sendSoundRequest("loud1");
        }


    }

    @Override
    public void processingFinished() {

    }





    private void updateText(){



        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                TextView text = (TextView) findViewById(R.id.hello);
                text.setText("Percussion at:" + percussionTime +
                        "\n Base Loudness: " + baseLoudness + " dB SPL " +
                        "\n Loudness:" + loudness + " dB SPL" +
                        "\n p: " + pitch);
            }
        });
    }

    @Override
    public void handleOnset(double time, double salience) {
        percussionTime = time;
        playlist += " percussion ";
        sendSoundRequest("percussion");

    }

    @Override
    protected void onDestroy(){
        Log.v("final", playlist);
    }

    private void sendSoundRequest(String sound){
        if( (System.currentTimeMillis() - startTime) > 500) {
            updateText();
            new RetrieveFeedTask().execute(sound);
            startTime = System.currentTimeMillis();
        }
        //Log.v("http response", response.toString());

    }
}
