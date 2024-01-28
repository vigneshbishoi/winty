import { View, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Pressable, I18nManager, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Text, Header, TextInput, Button } from '../../components/index'
import { BaseColor } from '../../config/colors'
import { String } from '../../config/string'
import Octicons from 'react-native-vector-icons/Octicons'
import { useTranslation } from 'react-i18next'
import { AppData } from '../../../App'
import Icon from "react-native-vector-icons/FontAwesome5";
import { EXISTING_EMAIL_API, EMAIL_OTP_SEND_API } from 'src/api'

const SignUp = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [email_OTP, setEmailOtp] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [showErrorPlaceHolder, setShowErrorPlaceHolder] = useState(false)
  const { t } = useTranslation()
  const getAppContext = useContext(AppData)
  let logo = getAppContext?.partner_app?.app_icon_home_screen?.uploaded_img;
  const [validation, setValidation] = useState({
    email: '', password: '', confirmPassword: '', PhnNo: ''
  })
  const [loader, setLoader] = useState(false)
  let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color

  const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  let checkValidEmail = email != '' && reg.test(email);

  const onSignUn = () => {
    if ((password != '' && validation.password != '' &&
      (password.length >= 6 || password.length <= 12 || format.test(password)))
      && (email != '' && reg.test(email) && validation.email != '')) {
      setValidation({
        email: '', password: '', confirmPassword: ''
      })
    } else if (email != '' && reg.test(email) === false) {
      setValidation({
        email: 'Please enter correct email', password: validation.password, confirmPassword: validation.confirmPassword
      })
    } else if (email != '' && reg.test(email) && validation.email != '') {
      setValidation({
        email: '', password: validation.password, confirmPassword: validation.confirmPassword
      })
    } else if (password != '' && (password.length < 8 || password.length > 12 || !format.test(password))) {
      setValidation({
        email: validation.email,
        password: "Please enter correct password \n ( Password must be 8 to 12 letters and contain one special character )",
        confirmPassword: validation.confirmPassword
      })
    } else if (password != confirm_password) {
      setValidation({
        email: validation.email,
        password: "",
        confirmPassword: "Password and Confirm Password does not match"
      })
    } else if (email == '' || password == '') {
      setShowErrorPlaceHolder(true)
    } else if (phoneNo !== '' && phoneNo.length !== 10) {
      setValidation({
        PhnNo: 'please enter correct phone number'
      })
    } else {
      email_opt_apicall()
    }
  }

  const checkEmailExist = () => {
    if (email != '' && reg.test(email) === false) {
      setValidation({
        email: 'Please enter correct email',
      })
    } else {
      EXISTING_EMAIL_API(email).then((res) => {
        if (res.status == false) {
          setValidation({
            email: 'Email already Exist',
          })
        } else {
          setValidation({
            email: '',
          })
        }
      })
    }
  }

  const email_opt_apicall = () => {
    setLoader(true)
    EMAIL_OTP_SEND_API(email)
      .then((response) => {
        let otp = response.data.otp
        setLoader(false)
        const data = {
          first_name: firstName,
          last_name: lastName,
          mobile: phoneNo,
          password: password,
          confirm_password: confirm_password,
          otp_code: otp,
          email: email
        }
        navigation.navigate('Otp', { data: data })
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}
        keyboardVerticalOffset={Platform.OS == 'android' ? 20 : 0}
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.container, styles.mainView]}>
            <Pressable onPress={() => { navigation.goBack() }} style={styles.backButton}>
              <Icon
                name="angle-left"
                size={22}
                color={handleColor}
                enableRTL={true}
              />
            </Pressable>
            {!!logo ? <Image source={{ uri: logo }} style={styles.logo} /> :
              <Text semiBold extraStyle={styles.title}>{String.Winty}</Text>}
            <Text medium extraStyle={[styles.loginText, { textAlign: I18nManager.isRTL ? "left" : "auto" }]}>{t("create_account")}</Text>
            <TextInput
              style={[styles.textInputView, styles.marginB20]}
              inputStyle={styles.textInput}
              onChangeText={(text) => setFirstName(text)}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder={t("first_name")}
              success={firstName.length > 0 ? true : !showErrorPlaceHolder}
              value={firstName}
              rightIconPress={() => setFirstName('')}
              rightIconShow={true}
            />
            <TextInput
              style={[styles.textInputView, styles.marginB20]}
              inputStyle={styles.textInput}
              onChangeText={(text) => setLastName(text)}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder={t("last_name")}
              success={lastName.length > 0 ? true : !showErrorPlaceHolder}
              value={lastName}
              rightIconPress={() => setLastName('')}
              rightIconShow={true}
            />
            <View>
              <TextInput
                style={[styles.textInputView, validation.email == '' && styles.marginB20]}
                inputStyle={styles.textInput}
                onChangeText={(text) => setEmail(text)}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder={t("email")}
                success={checkValidEmail ? true : !showErrorPlaceHolder}
                value={email}
                rightIconPress={() => {
                  setEmail('')
                  setValidation({
                    email: ''
                  })
                }}
                rightIconShow={true}
                onBlur={() => checkEmailExist()}
              />
              {validation.email != '' &&
                <Text extraStyle={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.email}</Text>}
            </View>
            <View>
              <TextInput
                style={[styles.textInputView, validation.PhnNo == '' && styles.marginB20]}
                inputStyle={styles.textInput}
                onChangeText={(text) => setPhoneNo(text)}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder={t("Phone Number")}
                success={checkValidEmail ? true : !showErrorPlaceHolder}
                value={phoneNo}
                keyboardType={'number-pad'}
                rightIconPress={() => {
                  setPhoneNo('')
                  setValidation({
                    PhnNo: ''
                  })
                }}
                rightIconShow={true}
                maxLength={10}
              />
              {validation.PhnNo != '' &&
                <Text extraStyle={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.PhnNo}</Text>}
            </View>
            <View>
              <TextInput
                style={[styles.textInputView, validation.password == '' && styles.marginB20]}
                inputStyle={styles.textInput}
                onChangeText={(text) => setPassword(text)}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder={t("password")}
                secureTextEntry={true}
                success={password != '' && password.length >= 6 &&
                  password.length <= 12 && format.test(password) ? true : !showErrorPlaceHolder}
                value={password}
                rightIconPress={() => {
                  setPassword('')
                  setValidation({ password: '' })
                }}
                rightIconShow={true}
              />
              {validation.password != '' &&
                <Text extraStyle={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.password}</Text>}
            </View>
            <View>
              <TextInput
                style={[styles.textInputView, validation.confirmPassword == '' && styles.marginB20]}
                inputStyle={styles.textInput}
                onChangeText={(text) => setConfirmPassword(text)}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder={t("confirm_password")}
                secureTextEntry={true}
                success={!showErrorPlaceHolder}
                value={confirm_password}
                rightIconPress={() => setConfirmPassword('')}
                rightIconShow={true}
              />
              {validation.confirmPassword != '' &&
                <Text extraStyle={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.confirmPassword}</Text>}
            </View>
            {/* <TextInput
              style={[styles.textInputView, styles.marginB30]}
              inputStyle={styles.textInput}
              onChangeText={(text) => setEmailOtp(text)}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder={t("email_OTP")}
              success={!showErrorPlaceHolder}
              value={email_OTP}
              keyboardType={'number-pad'}
              rightIconPress={() => setEmailOtp('')}
              rightIconShow={true}
              maxLength={6}
            /> */}
            <Button
              full
              loading={loader}
              style={styles.button}
              onPress={() => { onSignUn() }}
              styleText={{ fontSize: 18 }}
            >
              {t("sign_up")}
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignUp