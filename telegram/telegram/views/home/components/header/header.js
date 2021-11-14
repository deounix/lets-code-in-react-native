import React, {useState, useRef, useEffect} from "react";

import {View, Animated, Text, Easing} from "react-native";

import {
  VolumeOff as VolumeOffIcon,
  VolumeUp as VolumeUpIcon,
  Plus as PlusIcon,
  Search as SearchIcon,
  CloseSquare as CloseSquareIcon,
  AddUser as AddUserIcon,
  People as PeopleIcon,
  ShieldDone as ShieldDoneIcon,
} from "react-native-iconly";

import {SafeAreaView} from "react-native-safe-area-context";

// components
import {IconComponent} from "@/components";

// utils
import {hp, width} from "@/utils";

// theme
import {withTheme, themes} from "@/theme";

// styles
import styles from "./styles";

const HeaderComponent = ({theme, ...props}) => {
  const [volume, setVolume] = useState(true);

  const [isPlusClicked, setIsPlusClicked] = useState(false);

  // Animated Values
  const {
    animatedHideStylesWidth,
    animatedHideStylesOpacity,
    menuAnimatedStyleWidth,
    menuAnimatedStyleOpacity,
  } = {
    animatedHideStylesWidth: useRef(new Animated.Value(width)).current,
    animatedHideStylesOpacity: useRef(new Animated.Value(1)).current,
    menuAnimatedStyleWidth: useRef(new Animated.Value(0)).current,
    menuAnimatedStyleOpacity: useRef(new Animated.Value(0)).current,
  };

  // Animated Styles
  const menuAnimatedStyle = {
    width: menuAnimatedStyleWidth,
    opacity: menuAnimatedStyleOpacity,
  };
  const animatedHideStyles = {
    width: animatedHideStylesWidth,
    opacity: animatedHideStylesOpacity,
  };

  // Left Side Menu Animation >> Listen For PlusClicked
  useEffect(() => {
    if (isPlusClicked) {
      Animated.sequence([
        Animated.timing(animatedHideStylesOpacity, {
          toValue: 0,
          duration: 120,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(animatedHideStylesWidth, {
          toValue: 0,
          duration: 80,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]).start();

      Animated.parallel([
        Animated.timing(menuAnimatedStyleOpacity, {
          toValue: 1,
          duration: 200,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(menuAnimatedStyleWidth, {
          toValue: width / 3,
          duration: 200,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(menuAnimatedStyleOpacity, {
          toValue: 0,
          duration: 200,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(menuAnimatedStyleWidth, {
          toValue: 0,
          duration: 200,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]).start();

      Animated.sequence([
        Animated.timing(animatedHideStylesOpacity, {
          toValue: 1,
          duration: 120,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(animatedHideStylesWidth, {
          toValue: width,
          duration: 80,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [isPlusClicked]);

  return (
    <SafeAreaView edges={["top"]}>
      <View style={styles.container}>
        {/* Left Side Container */}
        <View style={styles.leftSideContainer}>
          <Animated.View style={[styles.leftSideMenu, menuAnimatedStyle]}>
            <IconComponent
              onPress={() => {}}
              component={() => (
                <AddUserIcon
                  set="light"
                  primaryColor={themes[theme.name].lightGrey}
                  stroke="regular"
                  size={hp(3)}
                />
              )}
            />

            <IconComponent
              onPress={() => {}}
              component={() => (
                <PeopleIcon
                  set="light"
                  primaryColor={themes[theme.name].lightGrey}
                  stroke="regular"
                  size={hp(3)}
                />
              )}
            />

            <IconComponent
              onPress={() => {}}
              component={() => (
                <ShieldDoneIcon
                  set="light"
                  primaryColor={themes[theme.name].lightGrey}
                  stroke="regular"
                  size={hp(3)}
                />
              )}
            />
          </Animated.View>

          <Animated.View style={[styles.leftSideApp, animatedHideStyles]}>
            <IconComponent
              onPress={() => setVolume(volumeState => !volumeState)}
              component={() =>
                volume ? (
                  <VolumeOffIcon
                    set="light"
                    primaryColor={themes[theme.name].grey}
                    stroke="regular"
                    size={hp(3)}
                  />
                ) : (
                  <VolumeUpIcon
                    set="light"
                    primaryColor={themes[theme.name].grey}
                    stroke="regular"
                    size={hp(3)}
                  />
                )
              }
            />

            <Text style={styles.appName}>Telegram</Text>
          </Animated.View>
        </View>

        {/* Right Side Container */}
        <View style={styles.rightSideContainer}>
          <IconComponent
            onPress={() => setIsPlusClicked(state => !state)}
            component={() => {
              return !isPlusClicked ? (
                <PlusIcon
                  set="light"
                  primaryColor={themes[theme.name].grey}
                  stroke="regular"
                  size={hp(3)}
                />
              ) : (
                <CloseSquareIcon
                  set="light"
                  primaryColor={themes[theme.name].grey}
                  stroke="regular"
                  size={hp(3)}
                />
              );
            }}
            style={styles.menuIconContainer}
          />

          <IconComponent
            onPress={() => {}}
            component={() => (
              <SearchIcon
                set="light"
                primaryColor={themes[theme.name].grey}
                stroke="regular"
                size={hp(3)}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withTheme(HeaderComponent);
