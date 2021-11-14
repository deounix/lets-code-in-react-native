import {Platform, StatusBar} from "react-native";

import SystemNavigationBar from "react-native-system-navigation-bar";

// utils
import PropTypes from "prop-types";

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
    }, 300);
  } else {
    StatusBar.setBarStyle(
      theme.name === "light" ? "dark-content" : "light-content",
    );
  }
};

// changeStatusBar Types
changeStatusBar.propTypes = {
  theme: PropTypes.object,
  customColor: PropTypes.string,
  defaultColor: PropTypes.string,
};

export default changeStatusBar;
