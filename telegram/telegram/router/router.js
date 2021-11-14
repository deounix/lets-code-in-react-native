import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
  Home as HomeIcon,
  Call as CallIcon,
  User as UserIcon,
  Setting as SettingIcon,
} from "react-native-iconly";

// screens - views
import {Home, Calls, Profile, Settings, Chat} from "@/views";

// router components
import {TabsContainer} from "@router-components";

// utils
import {hp} from "@/utils";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs
const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{lazy: false}}
      tabBar={props => <TabsContainer {...props} />}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, active}) => (
            <HomeIcon
              set={active ? "bold" : "curved"}
              primaryColor={color}
              stroke="regular"
              size={hp(3)}
            />
          ),
        }}
      />

      <Tab.Screen
        name="calls"
        component={Calls}
        options={{
          headerShown: false,
          tabBarIcon: ({color, active}) => (
            <CallIcon
              set={active ? "bold" : "curved"}
              primaryColor={color}
              stroke="regular"
              size={hp(3)}
            />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, active}) => (
            <UserIcon
              set={active ? "bold" : "curved"}
              primaryColor={color}
              stroke="regular"
              size={hp(3)}
            />
          ),
        }}
      />

      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({color, active}) => (
            <SettingIcon
              set={active ? "bold" : "curved"}
              primaryColor={color}
              stroke="regular"
              size={hp(3)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const defaultOptions = {
  headerShown: false,
  stackAnimation: "fade",
  direction: "ltr",
  stackPresentation: "containedTransparentModal",
};

// Root Stack Navigator
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...defaultOptions,
      }}>
      <Stack.Screen name="main" component={BottomTabs} />
      <Stack.Screen name="chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default RootStack;
