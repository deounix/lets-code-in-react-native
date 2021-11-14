import React from "react";

import {FlatList, View} from "react-native";

// theme
import {withTheme, themes} from "@/theme";

// utils
import {hp} from "@/utils";

// styles
import styles from "./styles";

const ChatList = ({theme}) => {
  const ChatView = () => {};

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        {backgroundColor: themes[theme.name].rgbaBackgroundColor(0.8)},
      ]}
    />
  );
};

export default withTheme(ChatList);
