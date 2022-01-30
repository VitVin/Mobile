import React,{createRef} from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import type { Node } from 'react';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { MyBtn } from '../MyBtn/Index';
import { Style } from './Style';
import { Input } from '../Input/Index';
import { CounterText } from '../Counter/Index';
import { Message } from '../Message/Index';


export class MainForm extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0,
            operand: 1
        };
        console.log('constructor');


    }

    setOperand = (e) => {
        console.log('asdasdawasawawasaw')
        this.setState({ operand: 1 })
        
    }

    increment = () => {
        this.setState({ counter: this.state.counter + parseInt(this.state.operand) })
        if (this.state.counter % 5 === 0 && this.state.counter !== 0) {
            this.setState({ operand: parseInt(this.state.operand) + 1 })
        }
    }
    decrement = () => {
        if (this.state.counter % 5 === 0 && this.state.counter !== 0) {
            this.setState({ operand: parseInt(this.state.operand) - 1 })
        }
        this.setState({ counter: this.state.counter - parseInt(this.state.operand) })

    }

    inputCheck = (e) => {
        this.setState({ operand: e })
        if (isNaN(this.state.operand) || e === "") {
              
        }
    }

    render() {

        return (
            <View
                style={Style.main}>
                
                <Pressable onPress={() => { this.setState({ counter: 0 }) }}>
                    <CounterText counter={this.state.counter} />
                </Pressable>
                <Input onChangeText={this.inputCheck} operand={this.state.operand} />
                <View style={Style.buttonView}>
                    <Pressable onPress={this.decrement}>
                        <MyBtn path={require('../../Assets/minus.png')} />
                    </Pressable>
                    <Pressable onPress={this.increment}>
                        <MyBtn path={require('../../Assets/plus.png')} />
                    </Pressable>
                </View>
            {  (isNaN(this.state.operand) || (this.state.operand == 0)) && <Message changeOperand={this.setOperand}/>}
            </View>





        );
    }
}