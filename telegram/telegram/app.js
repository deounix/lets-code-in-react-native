import React, {useState, useEffect} from "react";

import {Appearance} from "react-native";

import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";

// theme provider
import {ThemeProvider, default_theme} from "@/theme";

// root stack (Router)
import {RootStack} from "@/router";

const TelegramApp = () => {
  const [theme, setTheme] = useState(null);

  // set app theme (light or dark)
  useEffect(() => {
    if (!theme) {
      setTheme(Appearance.getColorScheme());
    }

    // listen for device appearance change
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme);
    });

    // cleanup - stop listening
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider name={theme} setTheme={setTheme}>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: default_theme.primary,
            },
          }}>
          {theme && <RootStack />}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default TelegramApp;
