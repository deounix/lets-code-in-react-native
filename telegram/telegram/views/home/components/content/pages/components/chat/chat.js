import React from "react";

import {TouchableOpacity, View, Image, Text} from "react-native";

// theme
import {withTheme, themes} from "@/theme";

// components
import {IconMoonComponent} from "@/components";

// styles
import styles from "./styles";

const Chat = ({
  theme,
  imgUrl,
  status,
  title,
  username,
  lastMsg,
  msgDate,
  msgStatus,
  msgNotificationsCount = 0,
  onClick,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: themes[theme.name].lightBackgroundColor,
        },
      ]}
      onPress={onClick}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri: imgUrl}} />

        {["online", "offline"].includes(status) && (
          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor: themes[theme.name].backgroundColor,
              },
            ]}>
            <View
              style={[
                styles.status,
                {
                  backgroundColor:
                    status === "online"
                      ? themes[theme.name].online
                      : themes[theme.name].offline,
                },
              ]}
            />
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text
          style={[styles.username, {color: themes[theme.name].grey}]}
          numberOfLines={1}>
          {title || username}
        </Text>
        <Text
          style={[styles.lastMsg, {color: themes[theme.name].darkGrey}]}
          numberOfLines={1}>
          {lastMsg}
        </Text>
      </View>

      <View style={styles.msgInfoContainer}>
        <Text
          style={[styles.msgDate, {color: themes[theme.name].grey}]}
          numberOfLines={1}>
          {msgDate}
        </Text>

        {["sent", "sent_read", "received", "received_read"].includes(
          msgStatus,
        ) ? (
          <IconMoonComponent
            name={
              ["received", "sent"].includes(msgStatus)
                ? "check"
                : ["sent_read", "received_read"].includes(msgStatus)
                ? "done_all"
                : ""
            }
            IcomoonProps={{
              color: ["sent", "sent_read"].includes(msgStatus)
                ? themes[theme.name].green
                : themes[theme.name].grey,
              size: 18,
            }}
            disabled
          />
        ) : (
          <View style={styles.notificationsCountContainer}>
            <Text style={styles.notificationsCount}>
              {msgNotificationsCount}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default withTheme(Chat);
