import React from "react";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
    textInput: {
        height: verticalScale(44),
        borderRadius: scale(5),
        // paddingHorizontal: scale(10),
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
});
