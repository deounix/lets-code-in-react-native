import {StyleSheet} from "react-native";

// theme
import {default_theme, Fonts, FontsSize} from "@/theme";

// utils
import {hp, wp} from "@/utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: hp(8),
    minHeight: 75,
    borderRadius: hp(2.5),
    padding: wp(2.5),
    marginBottom: hp(1),
  },
  imgContainer: {
    position: "relative",
  },
  img: {
    width: wp(14),
    height: "100%",
    borderRadius: hp(1.8),
  },
  statusContainer: {
    position: "absolute",
    bottom: 4,
    right: -2,
    padding: 3,
    borderRadius: 30,
  },
  status: {
    width: 12,
    height: 12,
    borderRadius: 24,
  },
  content: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingHorizontal: wp(3),
  },
  username: {
    fontFamily: Fonts.Regular,
    fontSize: FontsSize.small,
  },
  lastMsg: {
    fontFamily: Fonts.Regular,
    fontSize: FontsSize.tiny,
  },
  msgInfoContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  msgDate: {
    fontFamily: Fonts.Regular,
    fontSize: FontsSize.nano,
  },
  notificationsCountContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 18,
    borderRadius: 50,
    backgroundColor: default_theme.primary,
    marginTop: 2,
  },
  notificationsCount: {
    color: default_theme.white,
    fontFamily: Fonts.Regular,
    fontSize: FontsSize.nano,
    textAlign: "center",
  },
});

export default styles;
