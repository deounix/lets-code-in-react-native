import React from "react";

import {View, Text, TouchableOpacity} from "react-native";

import {SafeAreaView} from "react-native-safe-area-context";

// theme
import {default_theme} from "@/theme";

// styles
import styles from "./styles";

const TabsContainer = ({state, descriptors, navigation}) => {
  return (
    <SafeAreaView edges={["bottom"]}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const tabBarIcon = options?.tabBarIcon;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[styles.tabButton, isFocused && styles.shadow]}>
              {tabBarIcon({
                color: isFocused
                  ? default_theme.white
                  : default_theme.lightGrey,
                active: isFocused,
              })}
              {isFocused && <Text style={styles.tabButtonText}>{label}</Text>}

              {["home", "calls"].includes(route.name) && !isFocused && (
                <View style={styles.dotNotification} />
              )}

              {["home", "calls"].includes(route.name) && isFocused && (
                <View style={styles.notificationContainer}>
                  <Text style={styles.notificationText}>3</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabsContainer;
