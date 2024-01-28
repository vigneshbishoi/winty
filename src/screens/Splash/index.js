import { View, AppState, Modal, TouchableOpacity, Linking, Alert, Image } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Text } from '../../components/index'
import { String } from '../../config/string'
import { useTranslation } from 'react-i18next'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { checkVersion } from 'react-native-check-version';
import Entypo from 'react-native-vector-icons/Entypo'
import { BaseColor } from '../../config/colors'
import { AppData } from '../../../App'

const Splash = (props) => {

  const navigation = useNavigation()
  const { i18n } = useTranslation()
  const appState = useRef(AppState.currentState);
  const [updateInfo, setUpdateInfo] = useState(true);
  const [AppVersion, setAppVersion] = useState('');
  const [Later, setLater] = useState(false);
  const [screenData, setScreenData] = useState(null);
  const [dataUpdate, setDataUpdate] = useState(false);
  const getAppContext = useContext(AppData)
  const [partnerData, setPartnerData] = useState({})

  useLayoutEffect(() => {
    console.log('props', props?.route?.params?.data?.data?.partner_app);
    if (props?.route?.params?.data?.data?.partner_app) {
      setPartnerData(props?.route?.params?.data?.data?.partner_app)
    }
    if (getAppContext != undefined && getAppContext != null) {
      setScreenData(getAppContext?.partner_app?.splash_screen)
      setTimeout(async () => {
        const value = await AsyncStorage.getItem('Token')
        if (value !== '' && value !== null) {
          navigation.replace('HomeBottom')
        } else {
          navigation.replace('SignIn')
        }

      }, 3000);
      setDataUpdate(true)
    }
  }, [getAppContext])

  useEffect(() => {
    updateLanguage()
  }, [])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        checkForceUpdate();
      }
      appState.current = nextAppState;
    });
    checkForceUpdate();
    return () => {
      subscription.remove();
    };
  }, []);

  const checkForceUpdate = async () => {
    const version = await checkVersion();
    if (version.needsUpdate) {
      setAppVersion(version?.url);
      if (version.updateType == 'major' || version.updateType == 'minor') {
        setUpdateInfo(true);
        createTwoButtonAlert()
      } else {
        setUpdateInfo(true);
        createTwoButtonAlert()
        setLater(true);
      }
    } else {
      setUpdateInfo(false);
    }
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Update Required",
      "Please update to continue using the app.",
      [
        { text: "Update", onPress: () => Linking.openURL(AppVersion) }
      ]
    );

  const updateLanguage = async () => {
    try {
      const value = await AsyncStorage.getItem('Language')
      if (value !== null && value !== undefined) {
        i18n.changeLanguage(value)
      }
    } catch (e) {
      // error reading value
    }
  }

  const UpdateModal = ({ show }) => (
    <Modal transparent={true} visible={true} style={{ flex: 1 }} >
      <View style={{
        padding: 20, flex: 1,
        justifyContent: 'center', alignItems: 'center'
      }}>
        <View style={{ height: 300 }}>
          <View style={styles.toptext}>
            <Text style={styles.modalTitle}>
              {/* {__tr('forceUpdateTitle', language)} */}
              forceUpdateTitle
            </Text>
            {Later ? (
              <TouchableOpacity
                style={styles.laterbtn}
                onPress={() => {
                  setUpdateInfo(false);
                }}>
                {/* <Text>{__tr('Later', language)}</Text> */}
                <Text>Later</Text>
                <MaterialIcons name="close" size={20} color={'black'} />
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.desc}>
            <View style={{ flex: 0.8 }}>
              <Text style={styles.modalText}>
                {/* {__tr('forceUpdateDesc', language)} */}
                forceUpdateDesc
              </Text>
            </View>
            <View style={{ flex: 0.2 }}>
              <Entypo
                name="download"
                size={40}
                color={'black'}
                style={{ top: 10, left: 20 }}
              />
              {/* <Text>hjhjh</Text> */}
            </View>
          </View>
          <TouchableOpacity
            style={styles.updatebtn}
            onPress={() => {
              Linking.openURL(AppVersion);
              // setUpdateInfo(false)
            }}>
            {/* <Text style={styles.letsgo}>{__tr('LetsGo', language)}</Text> */}
            <Text style={styles.letsgo}>LetsGo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    dataUpdate ?
      <View style={[styles.container, styles.centerItem, {
        // backgroundColor: screenData != null ? screenData?.bg_color : BaseColor.primary_dark
        backgroundColor: partnerData != {} ? partnerData?.splash_screen?.splash_screen_bg_color : BaseColor.primary_dark
      }]}>
        {screenData != null && screenData?.uploaded_img ?
          <Image style={styles.iconImage} resizeMode='cover'
            source={{ 'uri': screenData?.uploaded_img }} /> :
          screenData != null && screenData?.text ?
            <Text semiBold extraStyle={[styles.title, {
              fontSize: Number(screenData?.font_size), color: screenData?.text_color
            }]}>{screenData?.text}</Text> :
            <Text semiBold extraStyle={styles.title}>{partnerData != {} ? partnerData?.splash_screen?.splash_icon_text : String.Winty}</Text>}
        {/* <UpdateModal show={updateInfo} /> */}
      </View> :
      null
  )
}

export default Splash