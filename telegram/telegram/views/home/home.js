import React from "react";

import {View} from "react-native";

// components
import {StatusBarComponent} from "@/components";

// local components
import {HeaderComponent, ContentComponent} from "@home-components";

// theme
import {withTheme, themes} from "@/theme";

// styles
import styles from "./styles";

const Home = ({navigation, theme}) => {
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
