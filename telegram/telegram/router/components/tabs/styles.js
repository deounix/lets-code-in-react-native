import {StyleSheet} from "react-native";

// theme
import {default_theme, Fonts, FontsSize} from "@/theme";

// utils
import {width, hp, wp} from "@/utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: width,
    height: hp(8),
    backgroundColor: "transparent",
  },
  tabButton: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
  tabButtonText: {
    color: default_theme.white,
    fontFamily: Fonts.Medium,
    fontSize: FontsSize.tiny,
  },
  notificationContainer: {
    position: "absolute",
    top: hp(-0.2),
    left: wp(7.2),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: default_theme.purple(0.8),
    paddingHorizontal: wp(2),
    borderRadius: 8,
  },
  notificationText: {
    color: default_theme.white,
    fontFamily: Fonts.ExtraLight,
    fontSize: FontsSize.nano,
  },
  dotNotification: {
    position: "absolute",
    top: hp(0.8),
    right: wp(8.4),
    backgroundColor: default_theme.purple(0.8),
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  shadow: {
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
