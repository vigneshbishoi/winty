import { View, SafeAreaView, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Text, Header, TextInput, Button } from '../../components/index'
import Icon from "react-native-vector-icons/FontAwesome5";
import { BaseColor, Images } from '../../config';
import { AppData } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';
import { assets } from 'react-native.config';

const ProfileEdit = () => {

    const navigation = useNavigation()
    const getAppContext = React.useContext(AppData)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [showErrorPlaceHolder, setShowErrorPlaceHolder] = useState(false)
    const [validation, setValidation] = useState({ email: '' })
    const [filePath, setFilePath] = useState({});
    const { t } = useTranslation()
    const userdata = useSelector(state => state.auth?.userdata)
    let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color
    const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    const Confirm = () => {
        if (email != '' && reg.test(email) === false) {
            setValidation({ email: 'Please enter correct email' })
        } else if (email != '' && reg.test(email) && validation.email != '') {
            setValidation({ email: '' })
        } else if (email == '' || firstName == '' || lastName == '') {
            setShowErrorPlaceHolder(true)
        } else {
            navigation.goBack()
        }
    }

    useEffect(() => {
        if (userdata?.data) {
            setFirstName(userdata?.data?.first_name)
            setLastName(userdata?.data?.last_name)
            setEmail(userdata?.data?.email)
        }
    }, [userdata])

    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response, response.assets);

            if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            if (response.assets) {
                setFilePath(response.assets[0]);
            }
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={"Edit Profile"}
                renderLeft={() => {
                    return (
                        <Icon
                            name="angle-left"
                            size={20}
                            color={handleColor}
                            enableRTL={true}
                        />
                    );
                }}
                onPressLeft={() => {
                    navigation.goBack();
                }}
            />
            <View style={[styles.container, styles.mainView]}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.contain}>
                        <Pressable onPress={() => { chooseFile('photo') }}>
                            <Image source={filePath?.uri ? { 'uri': filePath?.uri } : Images.user}
                                style={styles.thumb} />
                            <View style={[styles.cameraIconView, { backgroundColor: handleColor }]}>
                                <Image source={Images.camera}
                                    style={styles.cameraIcon} />
                            </View>
                        </Pressable>
                        <TextInput
                            style={[styles.textInputView, styles.marginB20, styles.mt20]}
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
                                onChangeText={(text) =>
                                    setEmail(text)
                                }
                                autoCorrect={false}
                                autoCapitalize='none'
                                placeholder={t("email")}
                                success={email != '' && reg.test(email) ? true : !showErrorPlaceHolder}
                                value={email}
                                onEndEditing={() => {
                                    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                                    if (email != '' && reg.test(email)) {
                                        setValidation({ email: '' })
                                    }
                                }}
                                rightIconPress={() => setEmail('')}
                                rightIconShow={true}
                            />
                            {validation.email != '' &&
                                <Text extraStyle={[styles.marginB10, styles.marginT5, styles.errorMsg]}> {validation.email}</Text>}
                        </View>
                    </View>
                </ScrollView>
                <Button
                    full
                    loading={false}
                    style={styles.confirm}
                    onPress={() => { Confirm() }}
                    styleText={{ fontSize: 18 }}
                >
                    Confirm
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default ProfileEdit