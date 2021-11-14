import React, {useRef, useState} from "react";

import {View} from "react-native";

import PagerView from "react-native-pager-view";

// components
import {TabsProvider} from "@home-components";

// local components
import Tabs from "./tabs";
import {TopPage, MessegesPage, GroupsPage, ChannelsPage} from "./pages";

// styles
import styles from "./styles";

const ContentComponent = ({navigation, theme}) => {
  const ref = useRef(null);

  const pages = [
    {
      name: "top",
      component: ({navigation}) => <TopPage navigation={navigation} />,
    },
    {
      name: "messeges",
      component: ({navigation}) => <MessegesPage navigation={navigation} />,
    },
    {
      name: "groups",
      component: ({navigation}) => <GroupsPage navigation={navigation} />,
    },
    {
      name: "channels",
      component: ({navigation}) => <ChannelsPage navigation={navigation} />,
    },
  ];

  const [tab, setTab] = useState(0);

  return (
    <TabsProvider
      setTab={tabIndexNumber => ref.current?.setPage(tabIndexNumber)}>
      <Tabs
        theme={theme}
        pages={pages}
        active={tab}
        setPage={page => ref.current?.setPage(page)}
      />

      <PagerView
        ref={ref}
        style={styles.contentContainer}
        initialPage={0}
        onPageSelected={e => setTab(e.nativeEvent.position)}>
        {pages.map((page, index) => {
          return <View key={index}>{page.component({navigation})}</View>;
        })}
      </PagerView>
    </TabsProvider>
  );
};

export default ContentComponent;
