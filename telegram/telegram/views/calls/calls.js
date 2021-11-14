import React from "react";

import {View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

// components
import {StatusBarComponent} from "@/components";

// utils
import PropTypes from "prop-types";

// theme
import {withTheme, themes} from "@/theme";

// styles
import styles from "./styles";

const Calls = ({navigation, theme}) => {
  return (
    <>
      <StatusBarComponent />

      <View
        style={[
          styles.container,
          {backgroundColor: themes[theme.name].backgroundColor},
        ]}></View>
    </>
  );
};

// Calls Types
Calls.propTypes = {
  navigation: PropTypes.object,
  theme: PropTypes.object,
};

export default withTheme(Calls);
