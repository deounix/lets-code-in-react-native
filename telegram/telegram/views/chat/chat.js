import React from "react";

import {View} from "react-native";

// components
import {StatusBarComponent} from "@/components";

// local components
import {
  HeaderComponent,
  ChatListComponent,
  ChatBoxComponent,
} from "@chat-components";

// theme
import {withTheme, themes} from "@/theme";

// styles
import styles from "./styles";

const Chat = ({navigation, theme}) => {
  return (
    <>
      <StatusBarComponent
        customColor={themes[theme.name].msgBoxBackgroundColor}
      />

      <View
        style={[
          styles.container,
          {backgroundColor: themes[theme.name].msgBoxBackgroundColor},
        ]}>
        <HeaderComponent
          navigation={navigation}
          imgUrl="https://tiny.cc/telegram-photo1"
          title="Mariam"
          last_seen="online"
        />

        <ChatListComponent />

        <ChatBoxComponent />
      </View>
    </>
  );
};

export default withTheme(Chat);
