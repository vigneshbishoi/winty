import { View, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Pressable, I18nManager } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Text, Header, TextInput, Button } from '../../components/index'
import { BaseColor } from '../../config/colors'
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTranslation } from 'react-i18next'
import { AppData } from '../../../App'

const ChangePassword = () => {

    const navigation = useNavigation()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showErrorPlaceHolder, setShowErrorPlaceHolder] = useState(false)
    const [validation, setValidation] = useState({
        oldPassword: '', newPassword: '', confirmPassword: ''
    })
    const { t } = useTranslation()
    const getAppContext = React.useContext(AppData)
    let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color
    const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    const onSubmit = () => {
        if (oldPassword != '' && (oldPassword.length < 6 || oldPassword.length > 12 || !format.test(oldPassword))) {
            setValidation({
                oldPassword: "Please enter correct Old Password",
                newPassword: validation.newPassword,
                confirmPassword: validation.confirmPassword
            })
        } else if (oldPassword != '' && validation.oldPassword != '' &&
            (oldPassword.length >= 6 || oldPassword.length <= 12 || format.test(oldPassword))) {
            setValidation({
                oldPassword: "",
                newPassword: validation.newPassword,
                confirmPassword: validation.confirmPassword
            })
        } else if (newPassword != '' && (newPassword.length < 6 || newPassword.length > 12 || !format.test(newPassword))) {
            setValidation({
                oldPassword: '',
                newPassword: "Please enter correct New Password \n ( Password must be 6 to 12 letters and contain one special character )",
                confirmPassword: validation.confirmPassword
            })
        } else if (newPassword != '' && validation.newPassword != '' &&
            (newPassword.length >= 6 || newPassword.length <= 12 || format.test(newPassword))) {
            setValidation({
                oldPassword: validation.oldPassword,
                newPassword: "",
                confirmPassword: validation.confirmPassword
            })
        } else if (newPassword != confirmPassword && confirmPassword != '') {
            setValidation({
                oldPassword: validation.oldPassword,
                newPassword: validation.newPassword,
                confirmPassword: "Password and Confirm Password does not match"
            })
        } else if (oldPassword == '' || newPassword == '' || confirmPassword == '') {
            setShowErrorPlaceHolder(true)
        } else {
            setShowErrorPlaceHolder(false)
            setValidation({
                oldPassword: '', newPassword: '', confirmPassword: ''
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}
                keyboardVerticalOffset={Platform.OS == 'android' ? 20 : 0}
                behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <Header
                    renderLeft={() => (<Icon
                        name="angle-left"
                        size={20}
                        color={handleColor}
                        enableRTL={true}
                    />)}
                    renderRight={() => (<Text medium numberOfLines={1} extraStyle={styles.saveButton}>{t("save")}</Text>)}
                    title={t("change_password")}
                    styleLeft={{ flex: 0 }}
                    styleContentLeft={styles.backButtonView}
                    styleContentCenter={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    styleRight={{ flex: 0 }}
                    onPressLeft={() => { navigation.goBack() }}
                    onPressRight={() => {
                        navigation.goBack()
                    }}
                />
                <ScrollView style={styles.container}
                    bounces={false}
                    showsVerticalScrollIndicator={false}>
                    <View style={[styles.container, styles.mainView]}>
                        <View>
                            <TextInput
                                style={[styles.textInputView, validation.oldPassword == '' && styles.marginB20]}
                                inputStyle={styles.textInput}
                                onChangeText={(text) => setOldPassword(text)}
                                autoCorrect={false}
                                autoCapitalize='none'
                                placeholder={t("old_password")}
                                success={oldPassword != '' && oldPassword.length >= 6 &&
                                    oldPassword.length <= 12 && format.test(oldPassword) ? true : !showErrorPlaceHolder}
                                value={oldPassword}
                                secureTextEntry={true}
                                rightIconPress={() => setOldPassword('')}
                                rightIconShow={true}
                            />
                            {validation.oldPassword != '' &&
                                <Text extraStyle={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.oldPassword}</Text>}
                        </View>
                        <View>
                            <TextInput
                                style={[styles.textInputView, validation.newPassword == '' && styles.marginB20, { marginTop: 0 }]}
                                inputStyle={styles.textInput}
                                onChangeText={(text) => setNewPassword(text)}
                                autoCorrect={false}
                                autoCapitalize='none'
                                placeholder={t("new_password")}
                                success={newPassword != '' && newPassword.length >= 6 &&
                                    newPassword.length <= 12 && format.test(newPassword) ? true : !showErrorPlaceHolder}
                                value={newPassword}
                                secureTextEntry={true}
                                rightIconPress={() => setNewPassword('')}
                                rightIconShow={true}
                            />
                            {validation.newPassword != '' &&
                                <Text extraStyle={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.newPassword}</Text>}
                        </View>
                        <View>
                            <TextInput
                                style={[styles.textInputView, validation.confirmPassword == '' && styles.marginB30]}
                                inputStyle={styles.textInput}
                                onChangeText={(text) => setConfirmPassword(text)}
                                autoCorrect={false}
                                autoCapitalize='none'
                                placeholder={t("confirm_password")}
                                success={!showErrorPlaceHolder}
                                value={confirmPassword}
                                secureTextEntry={true}
                                rightIconPress={() => setConfirmPassword('')}
                                rightIconShow={true}
                            />
                            {validation.confirmPassword != '' &&
                                <Text extraStyle={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.confirmPassword}</Text>}
                        </View>
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

export default ChangePassword