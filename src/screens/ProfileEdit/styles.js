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
    confirm: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(10)
    },
    contain: {
        alignItems: "center",
        paddingVertical: scale(20),
        width: "100%"
    },
    thumb: {
        width: scale(100),
        height: scale(100),
        borderRadius: scale(50),
    },
    mt20:{
        marginTop: scale(20),
    },
    textInputView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: BaseColor.white,
    },
    marginB20: {
        marginBottom: verticalScale(20)
    },
    textInput: {
        fontFamily: 'Poppins-Regular'
    },
    marginB10: {
        marginBottom: verticalScale(10)
    },
    marginT5: {
        marginTop: verticalScale(5)
    },
    errorMsg: {
        fontSize: 12,
        color: BaseColor.placeHolder_error,
        fontFamily: 'Poppins-Regular',
    },
    cameraIconView: {
        position: 'absolute',
        bottom: 0,
        width: scale(22),
        height: scale(22),
        borderRadius: scale(15),
        alignItems:'center',
        justifyContent:'center',
        right: scale(8)
    },
    cameraIcon: {
        width: scale(14),
        height: scale(14),
        zIndex: 22,
        tintColor: BaseColor.white
    }
})

export default styles;
