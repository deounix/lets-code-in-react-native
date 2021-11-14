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

// utils
import PropTypes from "prop-types";

// theme
import {withTheme, themes} from "@/theme";

// styles
import styles from "./styles";

const Chat = ({route, navigation, theme}) => {
  const {user_data} = route.params;

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
          imgUrl={user_data.imgUrl}
          title={user_data.username}
          last_seen={user_data.status}
        />

        <ChatListComponent user_id={user_data.id} />

        <ChatBoxComponent />
      </View>
    </>
  );
};

// Chat Types
Chat.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  theme: PropTypes.object,
};

export default withTheme(Chat);
