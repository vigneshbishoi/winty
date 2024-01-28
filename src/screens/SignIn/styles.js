import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { BaseColor } from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BaseColor.white
    },
    centerItem: {
        alignItems: "center",
        justifyContent: 'center',
    },
    mainView: {
        paddingHorizontal: scale(20),
        backgroundColor: BaseColor.white
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
    marginB10: {
        marginBottom: verticalScale(10)
    },
    marginT5: {
        marginTop: verticalScale(5)
    },
    marginB30: {
        marginBottom: verticalScale(30)
    },
    textInput: {
        fontFamily: 'Poppins-Regular'
    },
    logo:{
        height:scale(40),
        width:scale(40),
        alignSelf:"center",
        marginVertical: verticalScale(50),
    },
    title: {
        color: BaseColor.primary_dark,
        width: '100%',
        textAlign: 'center',
        marginVertical: verticalScale(50),
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
    },
    loginText: {
        fontSize: 18,
        color: BaseColor.light_black,
        marginBottom: verticalScale(30),
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
    },
    notHaveAccount: {
        fontSize: 13,
        color: BaseColor.light_black,
        textAlign: 'center',
        marginBottom: verticalScale(24),
        fontFamily: 'Poppins-Regular',
    },
    signUp_Text: {
        flex: 1,
        flexDirection: 'column-reverse'
    },
    forgotEmail_view: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    forgotEmail_Press: {
        paddingLeft: scale(10),
        paddingVertical: verticalScale(5)
    },
    errorMsg: {
        fontSize: 12,
        color: BaseColor.placeHolder_error,
        fontFamily: 'Poppins-Regular',
    }
})

export default styles;
