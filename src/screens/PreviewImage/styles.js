import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "src/config";

export default StyleSheet.create({
  contain: {
    alignItems: "center",
    padding: 20,
    width: "100%"
  },
  textInput: {
    height: 46,
    backgroundColor: BaseColor.fieldColor,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    width: "100%"
  },
  wrapper: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  contentPage: {
    bottom: 0
  },
  lineText: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
