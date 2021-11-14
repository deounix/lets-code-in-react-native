import React from "react";

import {ScrollView, Text, TouchableOpacity} from "react-native";

import {ChevronDown as ChevronDownIcon} from "react-native-iconly";

// main home components
import {withTabs} from "@home-components";

// components
import {ChatComponent} from "@home-pages-components";

// theme
import {useTheme, themes} from "@/theme";

// json Data
import {HomeData} from "@/assets/json";

// utils
import {hp} from "@/utils";

// styles
import {topStyles as styles} from "./styles";

const ChatUI = ({title, data, setTab}) => {
  const theme = useTheme();

  return (
    <>
      <Text
        style={[
          styles.title,
          {
            color: themes[theme.name].whiteOrDark,
          },
        ]}>
        {title}
      </Text>

      {data.map((item, index) => (
        <ChatComponent key={index} {...item} />
      ))}

      <TouchableOpacity
        style={styles.previousContainer}
        onPress={() => setTab()}>
        <Text
          style={[
            styles.previousTitle,
            {
              color: themes[theme.name].primary,
            },
          ]}>
          previous {title}
        </Text>

        <ChevronDownIcon
          style={styles.previousIcon}
          set="light"
          primaryColor={themes[theme.name].primary}
          stroke="regular"
          size={hp(2)}
        />
      </TouchableOpacity>
    </>
  );
};

const Top = ({tabs}) => {
  const {messeges, groups, channels} = HomeData;

  // NO NEED FOR (RECYCLE LIST - FLAT LIST) AS THIS ITEMS SHOULD BE LIMITED TO MAXIMUM 3 PER SECTION !!
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>
      {/* Messeges Tab >> tab_index is (1) */}
      <ChatUI
        title="messeges"
        data={messeges.slice(0, 3)}
        setTab={() => tabs.setTab(1)}
      />

      {/* Groups Tab >> tab_index is (2) */}
      <ChatUI
        title="groups"
        data={groups.slice(0, 3)}
        setTab={() => tabs.setTab(2)}
      />

      {/* Channels Tab >> tab_index is (3) */}
      <ChatUI
        title="channels"
        data={channels.slice(0, 3)}
        setTab={() => tabs.setTab(3)}
      />
    </ScrollView>
  );
};

export default withTabs(Top);
