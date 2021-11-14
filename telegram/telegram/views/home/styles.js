import {StyleSheet} from "react-native";

// utils
import {hp} from "@/utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomLeftRadius: hp(8),
    borderBottomRightRadius: hp(8),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 2.23,
    shadowRadius: 2.62,
    elevation: 2,
    overflow: "hidden",
  },
});

export default styles;
