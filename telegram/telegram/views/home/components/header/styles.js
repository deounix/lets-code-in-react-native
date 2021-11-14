import {StyleSheet} from "react-native";

// theme
import {default_theme, Fonts, FontsSize} from "@/theme";

// utils
import {hp, wp, width} from "@/utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: hp(6.5),
    width: width,
  },
  leftSideContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  leftSideApp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: wp(2.5),
  },
  leftSideMenu: {
    flexDirection: "row",
    height: hp(4.7),
    justifyContent: "space-around",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: default_theme.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
    shadowColor: default_theme.white,
  },
  hidden: {
    transform: [{scale: 0}],
  },
  appName: {
    color: default_theme.primary,
    fontFamily: Fonts.Bold,
    fontSize: FontsSize.big,
    textAlign: "center",
  },
  rightSideContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: wp(2.5),
  },
  menuIconContainer: {
    marginRight: wp(1.8),
  },
});

export default styles;
