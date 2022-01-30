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

interface IMessage {  
   changeOperand: (text: string) => void;  
}  

export  class Message extends React.Component {
    constructor(props: IMessage) {  
        super(props);  
    }  

    componentDidMount =() =>{
       
        this.timerID = setTimeout(
            () => {this.props.changeOperand()
            console.log('mount')
        }
            ,
            3000
          );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
        console.log('Unmount')
    }
    
    render(){
  return (
      <Text style={Style.text} >After 10 seconds the value of input will be aquil 1</Text>
  );
};
}