import { View, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Pressable, I18nManager } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Text, Header, TextInput, Button } from '../../components/index'
import { BaseColor } from '../../config/colors'
import { String } from '../../config/string'
import Octicons from 'react-native-vector-icons/Octicons'
import { useTranslation } from 'react-i18next'
import Icon from "react-native-vector-icons/FontAwesome5";
import { AppData } from '../../../App'

const ForgotPassword = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [email_OTP, setEmailOtp] = useState('')
  const [showErrorPlaceHolder, setShowErrorPlaceHolder] = useState(false)
  const { t } = useTranslation()
  const [validation, setValidation] = useState({
    email: '', email_OTP: ''
  })
  const getAppContext = useContext(AppData)
  let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color

  const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;

  const onSubmit = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email == '' && email_OTP == '') {
      setShowErrorPlaceHolder(true)
    } else if (email != '' && reg.test(email) === false) {
      setValidation({
        email: 'Please enter correct email', email_OTP: validation.email_OTP
      })
    } else {
      setShowErrorPlaceHolder(false)
      setValidation({
        email: '', email_OTP: ''
      })
    }
    // setTimeout(() => {
    //   navigation.navigate('ChangePassword')
    // }, 2000);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}
        keyboardVerticalOffset={Platform.OS == 'android' ? 20 : 0}
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={styles.container}
          bounces={false}
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
            <Text semiBold extraStyle={styles.title}>{String.Winty}</Text>
            <Text medium extraStyle={[styles.loginText, { textAlign: I18nManager.isRTL ? "left" : "auto" }]}>{t("email_enter")}</Text>
            <View>
              <TextInput
                style={[styles.textInputView, validation.email == '' && styles.marginB20]}
                inputStyle={styles.textInput}
                onChangeText={(text) => setEmail(text)}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder={t("email")}
                success={!showErrorPlaceHolder}
                value={email}
                rightIconPress={() => setEmail('')}
                rightIconShow={true}
              />
              {validation.email != '' &&
                <Text extraStyle={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.email}</Text>}
            </View>
            <TextInput
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
            />
            <Button
              full
              loading={false}
              style={styles.button}
              onPress={() => { onSubmit() }}
              styleText={{ fontSize: 18 }}
            >
              {t("submit")}
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ForgotPassword