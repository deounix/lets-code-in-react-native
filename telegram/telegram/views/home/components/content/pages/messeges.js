import React from "react";

import {FlatList} from "react-native";

// components
import {ChatComponent} from "@home-pages-components";

// json Data
import {HomeData} from "@/assets/json";

// utils
import {hp} from "@/utils";

// styles
import {messegesStyles as styles} from "./styles";

const Messeges = () => {
  const {messeges} = HomeData;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={messeges}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ChatComponent {...item} containerStyle={{marginBottom: hp(3.7)}} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Messeges;
