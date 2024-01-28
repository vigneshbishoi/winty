import * as Utils from "src/utils";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  imageBackgroundGrid1: {
    width: "100%",
    height: Utils.scaleWithPixel(200),
  },
  grid1: {
    width: "50%",
    paddingVertical: 10,
  },
  costPrice: { paddingHorizontal: 8, textDecorationLine: "line-through" },
  imageLoading: {
    borderRadius: 8
  }
});
