import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { BaseColor } from "../../config";

export default StyleSheet.create({
  imageBackgroundGrid1: {
    width: "100%",
    height: verticalScale(200),
  },
  grid1: {
    width: "50%",
    paddingVertical: 10,
  },
  costPrice: { paddingHorizontal: 8, textDecorationLine: "line-through", color: BaseColor.silver, fontSize: 16 },
  imageLoading: {
    borderRadius: 8
  },
  heartIcon: {
    padding: 5, position: "absolute", top: 8, right: 8
  }
});
