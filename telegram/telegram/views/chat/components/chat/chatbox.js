import React, {useState} from "react";

import {View, TextInput} from "react-native";

import {Voice2 as Voice2Icon, Send as SendIcon} from "react-native-iconly";

// components
import {IconComponent, IconMoonComponent} from "@/components";

// utils
import PropTypes from "prop-types";
import {hp} from "@/utils";

// theme
import {withTheme, themes} from "@/theme";

// styles
import styles from "./styles";

const ChatBoxComponent = ({theme}) => {
  const [message, setMessage] = useState("");

  return (
    <View style={styles.chatBoxContainer}>
      <View style={styles.leftSide}>
        <IconMoonComponent
          onPress={() => {}}
          name="insert_emoticon"
          IcomoonProps={{
            color: themes[theme.name].whiteOrDark,
            size: hp(3),
          }}
        />
      </View>

      <View style={styles.middleSide}>
        <TextInput
          style={[styles.input, {color: themes[theme.name].whiteOrDark}]}
          placeholder="type your message ..."
          underlineColorAndroid="transparent"
          multiline={true}
          onFocus={() => {}}
          onChangeText={text => setMessage(text)}
          value={message}
        />
      </View>

      <View style={styles.rightSide}>
        <IconMoonComponent
          style={styles.cameraIconContainer}
          onPress={() => {}}
          name="attach_file"
          IcomoonProps={{
            color: themes[theme.name].whiteOrDark,
            size: hp(3),
          }}
        />

        {message.length == 0 ? (
          <IconComponent
            onPress={() => {}}
            component={() => (
              <Voice2Icon
                set="light"
                primaryColor={themes[theme.name].whiteOrDark}
                stroke="regular"
                size={hp(3)}
              />
            )}
          />
        ) : (
          <IconComponent
            style={styles.sendIconContainer}
            onPress={() => {}}
            component={() => (
              <SendIcon
                set="bold"
                primaryColor={themes[theme.name].white}
                stroke="regular"
                size={hp(2)}
                style={styles.sendIcon}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

// ChatBoxComponent Types
ChatBoxComponent.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(ChatBoxComponent);
