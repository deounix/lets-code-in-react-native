import {StyleSheet} from "react-native";

// theme
import {Fonts, FontsSize} from "@/theme";

// utils
import {hp, wp} from "@/utils";

const topStyles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
  },
  content: {
    paddingBottom: hp(30),
  },
  title: {
    fontFamily: Fonts.Regular,
    fontSize: FontsSize.small,
    paddingBottom: hp(2),
    textTransform: "capitalize",
  },
  previousContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1),
  },
  previousTitle: {
    fontFamily: Fonts.Medium,
    fontSize: FontsSize.nano,
    textTransform: "capitalize",
  },
  previousIcon: {
    marginLeft: 5,
  },
});

const messegesStyles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
  },
  content: {
    paddingBottom: hp(30),
  },
});

const groupsStyles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
  },
  content: {
    paddingBottom: hp(30),
  },
});

const channelsStyles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
  },
  content: {
    paddingBottom: hp(30),
  },
});

export {topStyles, messegesStyles, groupsStyles, channelsStyles};
