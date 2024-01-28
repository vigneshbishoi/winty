import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { BaseColor } from "../../config/colors";

export default StyleSheet.create({
    default: {
        height: verticalScale(52),
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    textDefault: {
        color: BaseColor.white
    },
    outline: {
        borderWidth: 1,
    },

    full: {
        width: "100%",
        alignSelf: "auto",
    },
    round: {
        borderRadius: 28,
    },
});
