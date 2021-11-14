import React from "react";

import {FlatList} from "react-native";

// components
import {ChatComponent} from "@home-pages-components";

// json Data
import {HomeData} from "@/assets/json";

// utils
import {hp} from "@/utils";

// styles
import {groupsStyles as styles} from "./styles";

const Groups = () => {
  const {groups} = HomeData;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={groups}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ChatComponent {...item} containerStyle={{marginBottom: hp(3.7)}} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Groups;
