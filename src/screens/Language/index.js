import { View, SafeAreaView, FlatList, Pressable, I18nManager } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { scale } from 'react-native-size-matters'
import { Header, TextInput, Button, Text } from '../../components/index'
import Octicons from 'react-native-vector-icons/Octicons'
import { BaseColor } from '../../config/colors'
import { String, Language_Data } from '../../config/index'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'
import Icon from "react-native-vector-icons/FontAwesome5";
import { AppData } from '../../../App'

const Language = () => {

    const navigation = useNavigation()
    const [languageData, setLanguageData] = useState([])
    const [selectLanguage, setSelectLanguage] = useState('en')
    const { t, i18n } = useTranslation()
    const getAppContext = React.useContext(AppData)
    let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color

    const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;

    useEffect(() => {
        setLanguageData(Language_Data)
        updateLanguage()
    }, [])

    const updateLanguage = async () => {
        try {
            const value = await AsyncStorage.getItem('Language')
            if (value !== null && value !== undefined) {
                setSelectLanguage(value)
            }
        } catch (e) {
            // error reading value
        }
    }

    const renderItem = (item, index) => {

        const SelectLanguage = selectLanguage == item?.value

        return <Pressable onPress={() => { setSelectLanguage(item?.value) }} style={styles.renderPress}>
            <View>
                <Text extraStyle={[styles.renderTitle, {
                    color: SelectLanguage ? BaseColor.primary_dark :
                        BaseColor.black, fontWeight: SelectLanguage ? '400' : '300'
                }]}>{item.name}</Text>
                <Text extraStyle={[styles.renderSubTitle, { textAlign: I18nManager.isRTL ? "left" : "auto" }]}>{item.value?.toUpperCase()}</Text>
            </View>
            {SelectLanguage && <Octicons name={'check'} size={22} color={BaseColor.primary_dark} />}
        </Pressable>
    }

    const onLanguageChange = async (data) => {
        await AsyncStorage.setItem('Language', data)
        setTimeout(() => {
            if (data == 'ar') {
                I18nManager.forceRTL(true)
                RNRestart.Restart();
            }
            if (I18nManager.isRTL) {
                RNRestart.Restart()
                I18nManager.forceRTL(false)
            }
        }, 200);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
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
                renderRight={() => (<Text medium numberOfLines={1} extraStyle={styles.saveButton}>{t("save")}</Text>)}
                title={t("change_language")}
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
                    i18n.changeLanguage(selectLanguage)
                    onLanguageChange(selectLanguage)
                    navigation.goBack()
                }}
            />
            <View style={[styles.container, { paddingHorizontal: scale(20) }]}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={languageData}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => renderItem(item, index)}
                />
            </View>
        </SafeAreaView>
    )
}

export default Language