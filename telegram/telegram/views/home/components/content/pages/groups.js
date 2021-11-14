import React from "react";

import {FlatList} from "react-native";

// components
import {ChatComponent} from "@home-pages-components";

// json Data
import {HomeData} from "@/assets/json";

// utils
import PropTypes from "prop-types";

// styles
import {groupsStyles as styles} from "./styles";

const Groups = ({navigation}) => {
  const {groups} = HomeData;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={groups}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ChatComponent {...item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

// Groups props Types
Groups.propTypes = {
  navigation: PropTypes.object,
};

export default Groups;
