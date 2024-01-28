// Barcode and QR Code Scanner using Camera in React Native
// https://aboutreact.com/react-native-scan-qr-code/

// import React in our code
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  Linking,
  TouchableHighlight,
  PermissionsAndroid,
  Platform,
  StyleSheet,
} from 'react-native';

// import CameraScreen
import { CameraScreen } from 'react-native-camera-kit';
import { QRCODE_API } from 'src/api';

const App = () => {
  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(false);
  const navigation = useNavigation()

  const onOpenlink = () => {
    // If scanned then function to open URL in Browser
    Linking.openURL(qrvalue);
  };

  const onBarcodeScan = (qrvalue) => {
    // Called after te successful scanning of QRCode/Barcode
    setQrvalue(qrvalue);
    let check = qrvalue
    console.log('qrscan screen qrvalue', Number(check), Number.isInteger(Number(check)), qrvalue);
    QRCODE_API()
      .then(async (res) => {
        console.log('qrscan screen res', Number.isInteger(qrvalue), res);
        if (Number.isInteger(Number(check))) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Splash', params: { data: res } }]
          })
        }
      })
    setOpneScanner(false);
  };

  const onOpneScanner = () => {
    // To Start Scanning
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs permission for camera access',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // If CAMERA Permission is granted
            setQrvalue('');
            setOpneScanner(true);
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err', err);
          console.warn(err);
        }
      }
      // Calling the camera permission function
      requestCameraPermission();
    } else {
      setQrvalue('');
      setOpneScanner(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {opneScanner ? (
        <View style={{ flex: 1 }}>
          <CameraScreen
            showFrame={false}
            // Show/hide scan frame
            scanBarcode={true}
            // Can restrict for the QR Code only
            laserColor={'blue'}
            // Color can be of your choice
            frameColor={'yellow'}
            // If frame is visible then frame color
            colorForScannerFrame={'black'}
            // Scanner Frame color
            onReadCode={(event) =>
              onBarcodeScan(event.nativeEvent.codeStringValue)
            }
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            {/* {qrvalue ? 'Scanned Result: ' + qrvalue : ''} */}
          </Text>
          {qrvalue.includes('https://') ||
            qrvalue.includes('http://') ||
            qrvalue.includes('geo:') ? (
            <TouchableHighlight onPress={onOpenlink}>
              <Text style={styles.textLinkStyle}>
                {
                  qrvalue.includes('geo:') ?
                    'Open in Map' : 'Open Link'
                }
              </Text>
            </TouchableHighlight>
          ) : null}
          <TouchableHighlight
            onPress={onOpneScanner}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Find partner id
            </Text>
          </TouchableHighlight>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
    borderRadius: 10,
    position: 'absolute',
    bottom: 100
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  textLinkStyle: {
    color: 'blue',
    paddingVertical: 20,
  },
});