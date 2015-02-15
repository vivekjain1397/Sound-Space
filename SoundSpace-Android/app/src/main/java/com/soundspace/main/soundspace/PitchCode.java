package com.soundspace.main.soundspace;

/**
 * Created by Hima on 2/14/2015.
 */
public class PitchCode {

    /*
        PitchDetectionHandler pdh = new PitchDetectionHandler() {
            @Override
            public void handlePitch(PitchDetectionResult result,AudioEvent e) {
                final float pitchInHz = result.getPitch();
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        TextView text = (TextView) findViewById(R.id.hello);
                        text.setText("p: " + pitchInHz);
                    }
                });
            }
        };
        AudioProcessor p = new PitchProcessor(PitchProcessor.PitchEstimationAlgorithm.FFT_YIN, 22050, 1024, pdh);
        dispatcher.addAudioProcessor(p);*/
}
//percussion
/*
double sensitivity = 22;
        double threshold = 4;
        dispatcher.toString();
        dispatcher.addAudioProcessor(new PercussionOnsetDetector(sampleRate,
                bufferSize, this,sensitivity,threshold));

                /* @Override
    public void handleOnset(double time, double salience) {
        setText(time, salience);


    }
 */

