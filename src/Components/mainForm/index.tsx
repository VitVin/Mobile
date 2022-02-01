import React, { useState } from 'react';
import { View } from 'react-native';
import { Pressable } from 'react-native';
import { Button } from '../button';
import { style } from './style';
import { Input } from '../input';
import { CounterText } from '../counter';
import { Message } from '../message';


export const MainForm = () => {
    const [counter, setCounter] = useState(0)
    const [operand, setOperandVal] = useState(1)

    function setOperand(): void {
        setOperandVal(1)
    }

    function increment(): void {
        setCounter(counter + operand)
        if (counter % 5 === 0 && counter !== 0) {
            setOperandVal(operand + 1)
        }
    }

    function decrement(): void {
        if (counter % 5 === 0 && counter !== 0) {
            setOperandVal(operand - 1)
        }
        setCounter(counter - operand)
    }

    function inputCheck(event: string ): void {
        setOperandVal(event)
        if (isNaN(operand) || event === "") {
        }
    }

    return (
        <View style={style.main}>
            <Pressable onPress={() => { setCounter(0) }}>
                <CounterText counter={counter} />
            </Pressable>
            <Input onChangeText={inputCheck} operand={operand} />
            <View style={style.buttonView}>
                <Pressable onPress={decrement}>
                    <Button path={require('../../../assets/minus.png')} />
                </Pressable>
                <Pressable onPress={increment}>
                    <Button path={require('../../../assets/plus.png')} />
                </Pressable>
            </View>
            {(isNaN(operand) || (operand == 0)) && <Message changeOperand={setOperand} />}
        </View>
    );
}