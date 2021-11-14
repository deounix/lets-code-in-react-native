import {StyleSheet} from "react-native";

// theme
import {default_theme, Fonts, FontsSize} from "@/theme";

// utils
import {width, height, hp, wp} from "@/utils";

const styles = StyleSheet.create({
  sectionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    paddingVertical: hp(3),
    paddingHorizontal: wp(2.5),
  },
  sectionTitle: {
    fontSize: FontsSize.small,
    fontFamily: Fonts.Regular,
    textAlign: "center",
    textTransform: "capitalize",
  },
  underlineContainer: {
    borderBottomWidth: 1,
    borderBottomColor: default_theme.primary,
  },
  contentContainer: {
    flex: 1,
    width: width,
    height: height,
  },
});

export default styles;
