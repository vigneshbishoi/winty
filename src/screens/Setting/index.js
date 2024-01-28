import { View, SafeAreaView, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import styles from './styles'
import { Text, Header, TextInput, Button } from '../../components/index'
import Icon from "react-native-vector-icons/FontAwesome5";
import { BaseColor } from '../../config';
import { AppData } from '../../../App';
import { useNavigation } from '@react-navigation/native';

const Setting = () => {

    const navigation = useNavigation()
    const getAppContext = React.useContext(AppData)
    let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color

    const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={"Setting"}
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
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => {
                            navigation.navigate("Language");
                        }}
                    >
                        <Text regular extraStyle={styles.editProfileText}>Language</Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={handleColor}
                            style={{ marginLeft: 5 }}
                            enableRTL={true}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Setting