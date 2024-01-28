import React, { createContext, useLayoutEffect, useState } from 'react'
import RootNavigation from './src/navigation'
import database from '@react-native-firebase/database';
import SentryReport from './src/config/sentryConfig';
import * as Sentry from "@sentry/react-native";
import { persistor, store } from "src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const AppData = createContext()
SentryReport.sentryInstall(); //---- Sentry configuration
const App = () => {

  const [appData, setAppData] = useState(null)

  useLayoutEffect(() => {
    setAppData({})
    // database()
    //   .ref('/dev-winty')
    //   .once('value', snapshot => {
    //     let snapshotData = snapshot.val()
    //     let breakPoint = false
    //     Object?.values(snapshotData)?.map((item) => {
    //       if (item?.partner?.status == '1' && !breakPoint) {
    //         setAppData(item)
    //         breakPoint = true
    //         return;
    //       } else {
    //         return;
    //       }
    //     })
    //   })
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppData.Provider value={appData}>
          <RootNavigation />
        </AppData.Provider>
      </PersistGate>
    </Provider>
  )
}

export default Sentry.wrap(App);