import { View, SafeAreaView, KeyboardAvoidingView, Platform, Text, Pressable, I18nManager, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './styles'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { Header, TextInput, Button } from '../../components/index'
import { BaseColor } from '../../config/colors'
import { String } from '../../config/string'
import { useTranslation } from 'react-i18next'
import { AppData } from '../../../App'
import { SvgUri } from 'react-native-svg';
import { LOGIN_API } from 'src/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { userData } from 'src/actions/auth'

const SignIn = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loader, setLoader] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showErrorPlaceHolder, setShowErrorPlaceHolder] = useState(false)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const getAppContext = useContext(AppData)
  let logo = getAppContext?.partner_app?.app_icon_home_screen?.uploaded_img;
  const [validation, setValidation] = useState({
    email: '', password: ''
  })
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const onSignIn = () => {
    if ((password != '' && validation.password != '' &&
      (password.length >= 6 || password.length <= 12 || format.test(password)))
      && (email != '' && reg.test(email) && validation.email != '')) {
      setValidation({
        email: '', password: ''
      })
    } else if (email != '' && reg.test(email) === false) {
      setValidation({
        email: 'Please enter correct email', password: validation.password
      })
    } else if (email != '' && reg.test(email) && validation.email != '') {
      setValidation({
        email: '', password: validation.password
      })
    } else if (email == '' || password == '') {
      setShowErrorPlaceHolder(true)
    } else {
      setLoader(true)
      const payload = {
        email: email,
        password: password
      }
      LOGIN_API(payload)
        .then( async (res) => {
          console.log('signin screen res', res);
          dispatch(userData(res))
          setLoader(false)
          if (res.status == true) {
            await AsyncStorage.setItem('Token',res.data.auth_token)
            await AsyncStorage.setItem('Display_id',`${res.data.display_id}`)
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  { name: 'HomeBottom' }
                ],
              })
            );
          } else {
            setErrorMsg('Login credentials are wrong')
            setTimeout(() => {
              setErrorMsg('')
            }, 3000);
          }
        })
      // setShowErrorPlaceHolder(false)
      // setValidation({
      //   email: '', password: ''
      // })
    }
  }

  let checkValidEmail = email != '' && reg.test(email);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <View style={[styles.container, styles.mainView]}>
          {!!logo ? <Image
            source={{ 'uri': logo }}
            style={styles.logo} /> :
            <Text style={styles.title}>{String.Winty}</Text>}
          <Text style={[styles.loginText, { textAlign: I18nManager.isRTL ? "left" : "auto" }]}>{t("login_text")}</Text>
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
              rightIconPress={() => setEmail('')}
              rightIconShow={true}
            />
            {validation.email != '' &&
              <Text style={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.email}</Text>}
          </View>
          <View>
            <TextInput
              style={[styles.textInputView, validation.password == '' && styles.marginB30]}
              inputStyle={styles.textInput}
              onChangeText={(text) => setPassword(text)}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder={t("password")}
              secureTextEntry={true}
              value={password}
              success={showErrorPlaceHolder}
              rightIconPress={() => setPassword('')}
              rightIconShow={true}
            />
            {validation.password != '' &&
              <Text style={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.password}</Text>}
          </View>
          {
            errorMsg !== '' && <Text style={[styles.errorMsg]}>{errorMsg}</Text>
          }
          <View>
            <Button
              full
              loading={loader}
              style={{ marginTop: 20 }}
              onPress={() => { onSignIn() }}
              styleText={{ fontSize: 18 }}
            >
              {t("sign_in")}
            </Button>
            <View style={styles.forgotEmail_view}>
              <Pressable style={[styles.forgotEmail_Press, { paddingLeft: 2 }]}
                onPress={() => { navigation.navigate('Language') }}>
                <Text style={[styles.notHaveAccount, { marginBottom: 0 }]}>{t("language")}</Text>
              </Pressable>
              <Pressable style={styles.forgotEmail_Press} onPress={() => { navigation.navigate('Forgot') }}>
                <Text style={[styles.notHaveAccount, { marginBottom: 0 }]}>{t("forgot_password")}</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.signUp_Text}>
            <Text style={styles.notHaveAccount}>{t("do_not_have_account")}
              <Text onPress={() => { navigation.navigate('SignUp') }} style={[styles.notHaveAccount, {
                color: BaseColor.primary_dark, fontFamily: 'Poppins-Medium'
              }]}> {t("sign_up")}</Text></Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignIn