import React from "react";

import {View, Image, Text} from "react-native";

import {
  ArrowLeft as ArrowLeftIcon,
  Call as CallIcon,
} from "react-native-iconly";

// components
import {IconComponent, IconMoonComponent} from "@/components";

// theme
import {withTheme, themes} from "@/theme";

// utils
import PropTypes from "prop-types";
import {hp} from "@/utils";

// styles
import styles from "./styles";

const Header = ({navigation, theme, imgUrl, title, last_seen}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: themes[theme.name].backgroundColor},
      ]}>
      <View style={styles.leftSide}>
        <IconComponent
          onPress={() => navigation.goBack()}
          component={() => (
            <ArrowLeftIcon
              set="light"
              primaryColor={themes[theme.name].whiteOrDark}
              stroke="regular"
              size={hp(3)}
            />
          )}
        />

        <View style={styles.chatDetailsContainer}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{uri: imgUrl}} />

            {last_seen && (
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
                        last_seen === "online"
                          ? themes[theme.name].online
                          : themes[theme.name].offline,
                    },
                  ]}
                />
              </View>
            )}
          </View>

          <View style={styles.titleContainer}>
            <Text
              style={[
                styles.textTitle,
                {color: themes[theme.name].whiteOrDark},
              ]}
              numberOfLines={1}>
              {title}
            </Text>

            {last_seen && (
              <Text
                style={[styles.textStatus, {color: themes[theme.name].grey}]}>
                {last_seen}
              </Text>
            )}
          </View>
        </View>
      </View>

      <View style={styles.rightSide}>
        <IconComponent
          style={styles.callIcon}
          onPress={() => {}}
          component={() => (
            <CallIcon
              set="light"
              primaryColor={themes[theme.name].whiteOrDark}
              stroke="regular"
              size={hp(3)}
            />
          )}
        />

        <IconMoonComponent
          onPress={() => {}}
          name="dots-horizontal-triple"
          IcomoonProps={{
            color: themes[theme.name].whiteOrDark,
            size: hp(3),
          }}
        />
      </View>
    </View>
  );
};

// Header Types
Header.propTypes = {
  navigation: PropTypes.object,
  theme: PropTypes.object,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  last_seen: PropTypes.oneOf(["online", "offline"]),
};

export default withTheme(Header);
