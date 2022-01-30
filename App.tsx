
import React from 'react';
import type { Node } from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { MainForm } from './src/Components/MainForm/Index';
import { Style } from './Style';
const App: () => Node = () => {



  let counter = 0

  return (

    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#252E14" />
      <ImageBackground
        source={require('./src/Assets/4.jpg')}
        resizeMode='cover'
        style={Style.Background}
      >
        <MainForm />
      </ImageBackground>
    </SafeAreaView>
  );
};


export default App;
