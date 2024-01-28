import React from "react";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { BaseColor } from "../../config";

export default StyleSheet.create({
  card: {
    padding: 20,
    height: verticalScale(150),
    width: "100%",
    borderRadius: 8,
    backgroundColor: BaseColor.white,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveButton: {
    fontSize: 15,
    color: BaseColor.primary_dark ,
    maxWidth: scale(45)
}
});
