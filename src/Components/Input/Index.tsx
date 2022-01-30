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
  TextInput,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Style } from './Style';
import { MainForm } from '../MainForm/Index';

interface IInputStep {  
    onChangeText: (text: string) => void;  
    operand: string | number;  
}  

export  class Input extends React.Component {
    constructor(props: IInputStep) {  
        super(props);  
    }  

  
render()
    
{
  return (
    <TextInput    
    onChangeText={this.props.onChangeText}
    value={`${this.props.operand}`}
    keyboardType='numeric'
        style={
            Style.input
        } />
  );
};


}


