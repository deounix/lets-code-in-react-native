import {Platform, StatusBar} from "react-native";

import SystemNavigationBar from "react-native-system-navigation-bar";

// theme
import {default_theme} from "@/theme";

const changeStatusBar = ({
  theme,
  customColor = null,
  defaultColor = default_theme.primary,
}) => {
  if (Platform.OS === "android") {
    SystemNavigationBar.setNavigationColor(
      customColor || defaultColor,
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
};

export default changeStatusBar;
