import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { BaseColor } from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BaseColor.white
    },
    title: {
        fontSize: 28
    },
    mainView: {
        paddingHorizontal: scale(20),
    },
    settingButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: BaseColor.gray,
        paddingBottom: 20,
        paddingTop: 20,
    },
    logOut: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(10)
    },
    profileDetailView: {
        marginTop: verticalScale(20)
    },
    editProfileText: {
        fontSize: 16
    }
})

export default styles;
