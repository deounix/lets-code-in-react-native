import {StyleSheet} from "react-native";

// theme
import {default_theme} from "@/theme";

// utils
import {hp} from "@/utils";

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    borderBottomLeftRadius: hp(8),
    borderBottomRightRadius: hp(8),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
});

export default styles;
