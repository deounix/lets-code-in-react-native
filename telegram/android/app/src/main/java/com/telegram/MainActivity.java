package com.telegram;

import android.os.Bundle;
import android.content.Intent; 
import android.content.res.Configuration;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    getReactInstanceManager().onConfigurationChanged(this, newConfig);
  }

  @Override
  protected String getMainComponentName() {
    return "telegram";
  }
}
