import { View, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Text, Header, TextInput, Button } from '../../components/index'
import Icon from "react-native-vector-icons/FontAwesome5";
import { BaseColor, Images } from '../../config';
import { AppData } from '../../../App';
import ProfileDetail from '../../components/ProfileDetails';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGOUT_API } from 'src/api';
import { useSelector } from 'react-redux';

const Profile = () => {

    const navigation = useNavigation()
    const getAppContext = React.useContext(AppData)
    let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color
    const userdata = useSelector(state => state.auth?.userdata)

    const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;

    const logout = () => {
        LOGOUT_API()
            .then(async (res) => {
                console.log('profile screen res', res);
                if (res.status === true) {
                    await AsyncStorage.setItem('Token', '')
                    await AsyncStorage.setItem('Display_id','')
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [
                                { name: 'SignIn' }
                            ],
                        })
                    )
                }
            })

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container, styles.mainView]}>
                <Text semiBold extraStyle={styles.title}>Setting</Text>

                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.profileDetailView}>
                        <ProfileDetail
                            // image={userData.image}
                            image={Images.user}
                            textFirst={userdata?.data ? `${userdata?.data?.first_name} ${userdata?.data?.last_name}`: 'Steve Garrett'}
                            // point={userData.point}
                            // textSecond={'Singapore, Golden Mile'}
                            textThird={userdata?.data ? userdata?.data?.email :"@steve.garrett"}
                            onPress={() => { }}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => { navigation.navigate("Setting") }}
                    >
                        <Text regular extraStyle={styles.editProfileText}>Setting</Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={handleColor}
                            style={{ marginLeft: 5 }}
                            enableRTL={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => { navigation.navigate("ProfileEdit"); }}
                    >
                        <Text regular extraStyle={styles.editProfileText}>Edit Profile</Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={handleColor}
                            style={{ marginLeft: 5 }}
                            enableRTL={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => { navigation.navigate("ChangePassword") }}
                    >
                        <Text regular extraStyle={styles.editProfileText}>Change Password</Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={handleColor}
                            style={{ marginLeft: 5 }}
                            enableRTL={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => { navigation.navigate("Payment") }}
                    >
                        <Text regular extraStyle={styles.editProfileText}>Payments</Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={handleColor}
                            style={{ marginLeft: 5 }}
                            enableRTL={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => { }}
                    >
                        <Text regular extraStyle={styles.editProfileText}>Billing Address</Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={handleColor}
                            style={{ marginLeft: 5 }}
                            enableRTL={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => { }}
                    >
                        <Text regular extraStyle={styles.editProfileText}>Product Wishilst</Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={handleColor}
                            style={{ marginLeft: 5 }}
                            enableRTL={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => { }}
                    >
                        <Text regular extraStyle={styles.editProfileText}>Contact Us</Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={handleColor}
                            style={{ marginLeft: 5 }}
                            enableRTL={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingButton}
                        onPress={() => { }}
                    >
                        <Text regular extraStyle={styles.editProfileText}>About Us</Text>
                        <Icon
                            name="angle-right"
                            size={18}
                            color={handleColor}
                            style={{ marginLeft: 5 }}
                            enableRTL={true}
                        />
                    </TouchableOpacity>
                </ScrollView>
                <Button
                    full
                    loading={false}
                    style={styles.logOut}
                    onPress={() => {
                        logout()
                    }}
                    styleText={{ fontSize: 18 }}
                >
                    Sign Out
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default Profile