import React from "react";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
    contain: { height: verticalScale(45), flexDirection: "row" },
    contentLeft: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: scale(20),
        width: scale(60),
    },
    contentCenter: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    contentRight: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: scale(10),
        paddingRight: scale(20),
        height: "100%",
    },
    contentRightSecond: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: scale(10),
        paddingRight: scale(10),
        height: "100%",
    },
    right: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
});
