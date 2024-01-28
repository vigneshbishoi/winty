import { Platform, StyleSheet } from "react-native";
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
    backButton: {
        position:'absolute',
        padding: 8, 
        paddingHorizontal: 10, 
        marginLeft: 15, 
        marginTop: Platform.OS == 'android' ? 10 : 0
    },
    logo:{
        height:scale(40),
        width:scale(40),
        alignSelf:"center",
        marginVertical:scale(50)
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
    marginB30: {
        marginBottom: verticalScale(30)
    },
    textInput: {
        fontFamily: 'Poppins-Regular'
    },
    title: {
        color: BaseColor.primary_dark,
        width: '100%',
        textAlign: 'center',
        marginVertical: verticalScale(50),
    },
    loginText: {
        fontSize: 18,
        color: BaseColor.light_black,
        marginBottom: verticalScale(30)
    },
    button: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(30)
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
    }
})

export default styles;
