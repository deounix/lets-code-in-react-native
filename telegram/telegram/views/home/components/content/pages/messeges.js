import React from "react";

import {FlatList} from "react-native";

// components
import {ChatComponent} from "@home-pages-components";

// json Data
import {HomeData} from "@/assets/json";

// styles
import {messegesStyles as styles} from "./styles";

const Messeges = ({navigation}) => {
  const {messeges} = HomeData;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={messeges}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ChatComponent
          {...item}
          onClick={() =>
            navigation.navigate("chat", {
              user_data: {
                id: item.user_id,
                username: item.username,
                imgUrl: item.imgUrl,
                status: item.status,
              },
            })
          }
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Messeges;
