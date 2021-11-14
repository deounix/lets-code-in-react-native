import React, {useEffect} from "react";

import {StatusBar} from "react-native";

// utils
import PropTypes from "prop-types";
import {changeStatusBar} from "@/utils";

// theme
import {withTheme, themes} from "@/theme";

const StatusBarComponent = ({theme, customColor = null, ...props}) => {
  // listen for theme change (set system navigation color as dark or light)
  useEffect(() => {
    changeStatusBar({theme, customColor});
  }, [theme, customColor]);

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
