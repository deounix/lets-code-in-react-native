import React from "react";

import {FlatList, View, Text, Image} from "react-native";

// theme
import {withTheme, themes, default_theme} from "@/theme";

// json Data
import {MessegesData} from "@/assets/json";

// utils
import {hp, findByUserID, wp} from "@/utils";

// styles
import styles from "./styles";

const ChatList = ({theme, user_id}) => {
  const msgs = findByUserID(MessegesData, user_id);

  const MsgView = ({messageType, type, text, time, uri}) => {
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
              messageType === "GALLERY" && {
                paddingHorizontal: 0,
                paddingTop: 0,
              },
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
            {/* Gallery Image */}
            {messageType === "GALLERY" && (
              <Image style={styles.galleryImage} source={{uri}} />
            )}

            {/* TEXT */}
            <Text
              style={[
                styles.msgText,
                messageType === "GALLERY" && {
                  paddingVertical: hp(1),
                  paddingHorizontal: wp(2),
                },
                type === "RECIEVE" && {color: default_theme.dark},
              ]}>
              {text}
            </Text>
          </View>

          {/* Time Container */}
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
      style={[
        styles.container,
        {backgroundColor: themes[theme.name].rgbaBackgroundColor(0.8)},
      ]}
      contentContainerStyle={styles.content}
      data={msgs ? msgs.messages : []}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        if (item.messageType === "TEXT" || item.messageType === "GALLERY") {
          return <MsgView {...item} />;
        }

        return null;
      }}
    />
  );
};

export default withTheme(ChatList);
