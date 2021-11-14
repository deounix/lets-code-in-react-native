import React, {useEffect} from "react";

import {StatusBar, Platform} from "react-native";

import SystemNavigationBar from "react-native-system-navigation-bar";

// utils
import PropTypes from "prop-types";

// theme
import {withTheme, themes, default_theme} from "@/theme";

const StatusBarComponent = ({theme, customColor = null, ...props}) => {
  // listen for theme change (set system navigation color as dark or light)
  useEffect(() => {
    if (Platform.OS === "android") {
      SystemNavigationBar.setNavigationColor(
        customColor || default_theme.primary,
        customColor ? false : true,
      );

      setTimeout(() => {
        StatusBar.setBarStyle(
          theme.name === "light" ? "dark-content" : "light-content",
        );
      }, 200);
    } else {
      StatusBar.setBarStyle(
        theme.name === "light" ? "dark-content" : "light-content",
      );
    }
  }, [theme]);

  return (
    <StatusBar
      backgroundColor={themes[theme.name].backgroundColor}
      barStyle={theme.name === "light" ? "dark-content" : "light-content"}
      animated={true}
      {...props}
    />
  );
};

// Types
StatusBarComponent.propTypes = {
  theme: PropTypes.shape({
    name: PropTypes.oneOf(["dark", "light"]),
    setTheme: PropTypes.func,
  }),
  customColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default withTheme(StatusBarComponent);
