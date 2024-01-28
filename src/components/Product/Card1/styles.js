import * as Utils from "src/utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contain: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageBackgroundCard1: {
    width: Utils.scaleWithPixel(80),
    height: Utils.scaleWithPixel(110),
  },
  containLoading : {
    flexDirection: "row",
  }
});
