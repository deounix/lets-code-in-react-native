import React, {useCallback} from "react";

import {View} from "react-native";

import {useFocusEffect} from "@react-navigation/native";

// components
import {StatusBarComponent} from "@/components";

// local components
import {HeaderComponent, ContentComponent} from "@home-components";

// utils
import {changeStatusBar} from "@/utils";

// theme
import {withTheme, themes} from "@/theme";

// styles
import styles from "./styles";

const Home = ({navigation, theme}) => {
  // set & reset status bar >>> (important when user goBack from other pages)
  useFocusEffect(useCallback(() => {
    changeStatusBar({theme});
  }, []));

  return (
    <>
      <StatusBarComponent />

      <View
        style={[
          styles.container,
          {backgroundColor: themes[theme.name].backgroundColor},
        ]}>
        <HeaderComponent />

        <ContentComponent navigation={navigation} theme={theme} />
      </View>
    </>
  );
};

export default withTheme(Home);
