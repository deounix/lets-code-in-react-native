import React from "react";

import {FlatList, View, Text} from "react-native";

// theme
import {withTheme, themes, default_theme} from "@/theme";

// json Data
import {MessegesData} from "@/assets/json";

// utils
import {hp, findByUserID} from "@/utils";

// styles
import styles from "./styles";

const ChatList = ({theme, user_id}) => {
  const msgs = findByUserID(MessegesData, user_id);

  const MsgView = ({type, text, time}) => {
    return (
      <View
        style={[
          styles.msgContainer,
          type === "RECIEVE" && {
            flexDirection: "row",
          },
        ]}>
        <View style={{flexDirection: "column"}}>
          <View
            style={[
              styles.msgContent,
              type === "RECIEVE"
                ? {
                    ...styles.recieveMsgContent,
                    backgroundColor:
                      themes[theme.name].msgContentBackgroundColor,
                  }
                : {
                    ...styles.sendMsgContent,
                  },
            ]}>
            <Text
              style={[
                styles.msgText,
                type === "RECIEVE" && {color: default_theme.dark},
              ]}>
              {text}
            </Text>
          </View>

          <View
            style={[
              styles.msgTimeContainer,
              type === "RECIEVE" && {
                flexDirection: "row",
              },
            ]}>
            <Text
              style={[
                styles.msgTime,
                {
                  color: themes[theme.name].whiteOrDark,
                },
                type === "RECIEVE" && {
                  flexDirection: "column",
                },
              ]}>
              {time}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        {backgroundColor: themes[theme.name].rgbaBackgroundColor(0.8)},
      ]}
      data={msgs ? msgs.messages : []}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        if (item.messageType === "TEXT") {
          return <MsgView {...item} />;
        }

        return null;
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default withTheme(ChatList);
