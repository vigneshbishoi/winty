import { StyleSheet } from "react-native";
import { BaseColor } from "src/config";
import * as Utils from "src/utils";

export default StyleSheet.create({
  contain: {
    flexDirection: "row",
    height: Utils.scaleWithPixel(115),
    borderRadius: 8,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: { alignItems: "center" },
});
