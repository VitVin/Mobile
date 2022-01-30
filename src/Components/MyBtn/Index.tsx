import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  borderWidth,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Style } from './Style';

export const MyBtn = ({ path }) => {

  return (

    <View style={Style.Button}>
      <Image
        style={Style.image}
        source={path}
      />
    </View>
  );
};





