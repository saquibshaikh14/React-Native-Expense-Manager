/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  BackHandler,
  AppState,
  NativeEventSubscription
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import BlurView from './src/components/BlurView';
import { WithSplashScreen } from './src/screens/splashScreen';
import HomeScreen from './src/screens/HomeScreen';

// import {Provider} from 'react-redux';
// import store from './src/redux/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [isLocked, setLocked] = useState(/*true*/false); //move to redux store later
  const [isAppReady, setAppReady] = useState(/*false*/true);

  // console.log(Colors)
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };


  //load biometry type
  useEffect(() => {
    //making useEffect function async is not recommended. Wrap that in async wrapper instead
    const biometryAuthenticate = async () => {
      if (!isLocked) return;
      const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });
      const { biometryType, error } = await rnBiometrics.isSensorAvailable();

      if (error) {
        console.log(error);
      }

      //hdnle for other like TouchID, FaceID (BiometryTypes.[xxxx])
      if (biometryType === BiometryTypes.Biometrics) {
        //device fingerPrint
        rnBiometrics.simplePrompt({ promptMessage: "Authentication Required!", cancelButtonText: "Cancel", fallbackPromptMessage: "Use alternative option to authenticate" })
          .then(({ success }) => {
            if (success) {
              //user authenticated
              setLocked(false);
            }
            else {
              //close the app(not authenticated)
              BackHandler.exitApp();
            }
            console.log(success)
          }).catch(({ error, success }) => {
            console.log(error, success);
            console.log("User canceled authentication");
            BackHandler.exitApp();
          })
      }
    }
    /**
     * Subscribin to app state change only when not authenticated.
     * fix added: without prompt input app pushed to background authentication return false
     * and app stuck on splash screen
     * need to handle background foreground, canceling fingerprint etc
     */
    let appStateSubscription: NativeEventSubscription | null = null;
    if (isLocked) {
      // biometryAuthenticate();
      appStateSubscription = AppState.addEventListener("change",
        biometryAuthenticate)
    }

    return () => {
      appStateSubscription && appStateSubscription.remove();
    };

    // console.log(biometryType, BiometryTypes)
  }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAppReady(true)
  //   }, 100)
  // }, [])

  return (

    <WithSplashScreen isAppReady={isAppReady && !isLocked}>
      {/* <Provider store={store}> */}
      {/* add overlay to blur if the isLock is true. */}
      <SafeAreaView style={{ ...backgroundStyle, flex: 1 }}>
        {/* <ScrollView> */}
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          {/* <BlurView isLocked={isLocked} /> */}
          <HomeScreen />

        {/* </ScrollView> */}
      </SafeAreaView>
      {/* </Provider> */}
    </WithSplashScreen>
  );
}

const styles = StyleSheet.create({
});

export default App;
