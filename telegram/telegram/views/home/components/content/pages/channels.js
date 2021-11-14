import React from "react";

import {FlatList} from "react-native";

// components
import {ChatComponent} from "@home-pages-components";

// json Data
import {HomeData} from "@/assets/json";

// styles
import {channelsStyles as styles} from "./styles";

const Channels = () => {
  const {channels} = HomeData;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={channels}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ChatComponent {...item} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Channels;
