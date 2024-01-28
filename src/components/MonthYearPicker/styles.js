import { StyleSheet } from "react-native";
import { BaseColor } from "../../config";

export default StyleSheet.create({
  contentPickDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 2,
    hadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: BaseColor.white,
  },
  itemPick: {
    flex: 1,
    justifyContent: "center",
  },
  linePick: {
    width: 1,
    marginRight: 10,
  },
});
