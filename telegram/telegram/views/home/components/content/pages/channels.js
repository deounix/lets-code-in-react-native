import React from "react";

import {FlatList} from "react-native";

// components
import {ChatComponent} from "@home-pages-components";

// json Data
import {HomeData} from "@/assets/json";

// utils
import PropTypes from "prop-types";

// styles
import {channelsStyles as styles} from "./styles";

const Channels = ({navigation}) => {
  const {channels} = HomeData;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={channels}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ChatComponent {...item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

// Channels props Types
Channels.propTypes = {
  navigation: PropTypes.object,
};

export default Channels;
