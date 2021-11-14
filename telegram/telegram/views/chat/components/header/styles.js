import {StyleSheet} from "react-native";

// theme
import {Fonts, FontsSize} from "@/theme";

// utils
import {hp, wp} from "@/utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 2.23,
    shadowRadius: 2.62,
    elevation: 2,
    paddingHorizontal: wp(2),
    height: hp(6.5),
  },
  leftSide: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  chatDetailsContainer: {
    flexDirection: "row",
    marginLeft: wp(8),
  },
  imgContainer: {
    position: "relative",
    flexDirection: "row",
  },
  img: {
    width: hp(4.5),
    height: hp(4.5),
    borderRadius: 12,
  },
  statusContainer: {
    position: "absolute",
    bottom: 2,
    right: -2,
    padding: 3,
    borderRadius: 10,
  },
  status: {
    width: hp(1),
    height: hp(1),
    borderRadius: hp(2),
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginLeft: wp(3.5),
  },
  textTitle: {
    fontFamily: Fonts.Medium,
    fontSize: FontsSize.tiny,
    textTransform: "lowercase",
  },
  textStatus: {
    fontFamily: Fonts.Regular,
    fontSize: FontsSize.tiny,
  },
  rightSide: {
    flexDirection: "row",
  },
  callIcon: {
    marginRight: wp(2.5),
  },
});

export default styles;
