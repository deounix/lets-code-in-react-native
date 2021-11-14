import React from "react";

import {View, TouchableOpacity, Text} from "react-native";

// theme
import {default_theme, themes} from "@/theme";

// styles
import styles from "./styles";

const Tabs = ({theme, pages, active, setPage}) => {
  return (
    <View style={styles.sectionsContainer}>
      {pages.map((page, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => setPage(index)}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color:
                    active === index
                      ? default_theme.primary
                      : themes[theme.name].grey,
                },
              ]}>
              {page.name}
            </Text>

            {active === index && <View style={styles.underlineContainer} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabs;
