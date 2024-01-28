import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { BaseColor } from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BaseColor.white
    },
    title: {
        color: BaseColor.primary_dark,
        width: '100%',
        textAlign: 'center',
        marginTop: verticalScale(50),
    },
    subTitle: {
        color: BaseColor.gray,
        width: '100%',
        textAlign: 'center',
        fontWeight: '600',
        marginVertical: verticalScale(10),
    },
    backButton: {
        position: 'absolute',
        padding: 8,
        paddingHorizontal: 10,
        marginLeft: 15,
        marginTop: Platform.OS == 'android' ? 10 : 0
    },
    otpInputView: {
        marginHorizontal: scale(20),
        sshadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        backgroundColor: BaseColor.white,
        marginTop: scale(30),
        paddingHorizontal: scale(20),
        borderRadius: scale(10),
        paddingBottom: scale(30)
    },
    otpInput: {
        marginTop: scale(30),
        height: verticalScale(70),
    },
    otpInputBox: {
        width: scale(40),
        height: verticalScale(40),
        borderWidth: scale(1.5),
        borderRadius: scale(10),
        fontSize: 24,
        color: BaseColor.black,
        borderColor: BaseColor.primary_dark
    }
})

export default styles;
