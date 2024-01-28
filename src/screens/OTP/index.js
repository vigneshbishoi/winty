import { View, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './style'
import { Text, Header, TextInput, Button } from '../../components/index'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { AppData } from '../../../App'
import Octicons from 'react-native-vector-icons/Octicons'
import { BaseColor } from '../../config'
import { CommonActions, useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/FontAwesome5";
import { EMAIL_OTP_SEND_API, SIGNUP_API } from 'src/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { userData } from 'src/actions/auth'

const OTP = (props) => {

    const navigation = useNavigation()
    const getAppContext = useContext(AppData)
    let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color
    const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;
    const [loader,setLoader] = useState(false)
    const [code,setCode] = useState('')
    const [errorMsg,setErrorMsg] = useState('')
    const dispatch = useDispatch()
let data = props.route.params.data 

const signup_apicall = () => {
if (code?.code?.length == 6) {
    const payload = {
        first_name: data?.first_name,
        last_name: data?.last_name,
        mobile: data?.mobile,
        password: data?.password,
        confirm_password: data?.confirm_password,
        otp_code: code?.code,
        email: data?.email
      }
    setLoader(true)
    SIGNUP_API(payload)
      .then(async(res) => {
        setErrorMsg(res.message)
        console.log('otp screen res', res);
        dispatch(userData(res))
        setLoader(false)
        await AsyncStorage.setItem('Token',res.data.auth_token)
        await AsyncStorage.setItem('Display_id',`${res.data.display_id}`)
        setLoader(false)
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'HomeBottom' }
                ],
            })
        );
      })
    }else{
        setErrorMsg('please fill the correct OTP')
    }
  }

  const email_opt_apicall = () => {
    EMAIL_OTP_SEND_API(data?.email)
      .then((response) => {
        let otp = response.data.otp
        console.log('resend otp=',otp);
      })
  }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Pressable onPress={() => { navigation.goBack() }} style={styles.backButton}>
                    <Icon
                        name="angle-left"
                        size={22}
                        color={handleColor}
                        enableRTL={true}
                    />
                </Pressable>
                <Text semiBold extraStyle={styles.title}>Verification</Text>
                <Text extraStyle={styles.subTitle}>Enter your OTP code</Text>
                {/* <Text extraStyle={styles.subTitle}>{data.otp_code}</Text> */}
                <View style={styles.otpInputView}>
                    <OTPInputView
                        style={styles.otpInput}
                        pinCount={6}
                        // code={code} 
                        onCodeChanged = {code => {
                             setCode({code})
                            }}
                        autoFocusOnLoad={false}
                        codeInputFieldStyle={[styles.otpInputBox, getAppButtonBG && { borderColor: getAppButtonBG }]}
                        codeInputHighlightStyle={{
                            // borderColor: "#03DAC6",
                        }}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                            // code.length == 6 && signup_apicall()
                            // navigation.dispatch(
                            //     CommonActions.reset({
                            //         index: 1,
                            //         routes: [
                            //             { name: 'HomeBottom' }
                            //         ],
                            //     })
                            // );
                        })}
                        // placeholderCharacter={'*'}
                        placeholderTextColor={'yellow'}
                        selectionColor={"#03DAC6"}
                    />
                    <Text>{errorMsg}</Text>
                    <Button
                        full
                        loading={loader}
                        style={{ marginTop: 20 }}
                        onPress={() => {
                            signup_apicall()
                            // navigation.dispatch(
                            //     CommonActions.reset({
                            //         index: 1,
                            //         routes: [
                            //             { name: 'HomeBottom' }
                            //         ],
                            //     })
                            // );
                        }}
                        styleText={{ fontSize: 18 }}
                    >
                        Verify
                    </Button>
                </View>
                <Text extraStyle={styles.subTitle}>Didn't you receive any code?</Text>
                <TouchableOpacity onPress={()=>email_opt_apicall()}>
                <Text medium extraStyle={[styles.title, { marginTop: 0, fontSize: 17 },
                getAppButtonBG && { color: getAppButtonBG }]}>
                    Resend New Code</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default OTP