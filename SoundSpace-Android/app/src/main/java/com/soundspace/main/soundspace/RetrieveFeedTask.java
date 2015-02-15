package com.soundspace.main.soundspace;

import android.os.AsyncTask;
import android.util.Log;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

/**
 * Created by Hima on 2/15/2015.
 */
class RetrieveFeedTask extends AsyncTask<String, Void, String> {

    private Exception exception;

    HttpResponse response = null;
    HttpClient client = null;
    HttpGet request = null;

    protected String doInBackground(String... urls) {

        try {

            client = new DefaultHttpClient();
            request = new HttpGet();

            Log.e("sound passed:", urls[0]);
                request.setURI(new URI("http://104.236.209.35:3000/send/"+ urls[0]));
                response = client.execute(request);
                response.getEntity().consumeContent();
            return response.getEntity().getContent().toString();

        }catch (URISyntaxException e){
            e.printStackTrace();
        }catch (ClientProtocolException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
    }
      return null;
    }

    protected void onPostExecute(String feed) {
        // TODO: check this.exception
        // TODO: do something with the feed
    }
}