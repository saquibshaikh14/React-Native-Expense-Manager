/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  BackHandler
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

// import {Provider} from 'react-redux';
// import store from './src/redux/store';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLocked, setLocked] = useState(true); //move to redux store later


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };


  //load biometry type
  useState(async () => {
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
          } else {
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

    // console.log(biometryType, BiometryTypes)
  }, [])

  return (
    // <Provider store={store}>
    //add overlay to blur if the isLock is true.
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <BlurView isLocked={isLocked} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
