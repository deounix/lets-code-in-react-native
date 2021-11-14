import React from "react";

import {View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

// components
import {StatusBarComponent} from "@/components";

// theme
import {withTheme, themes} from "@/theme";

// styles
import styles from "./styles";

const Profile = ({navigation, theme}) => {
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

export default withTheme(Profile);
