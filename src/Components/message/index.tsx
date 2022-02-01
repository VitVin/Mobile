import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { style } from './style';

const MESSAGE_TIMEOUT_MS: number = 10000
const ONE_SECOND_MS: number = 1000

interface IMessage {
    changeOperand: () => void;
}

export const Message = ({ changeOperand }: IMessage) => {

    const [TimeLeftSec, setTimeLeftSec] = useState(10)

    useEffect(() => {
        let timerID = setTimeout(() => {
            changeOperand()
        }, MESSAGE_TIMEOUT_MS
        )
        return () => {
            clearInterval(timerID)
        }
    }, []);

    useEffect(() => {
        let timerID = setInterval(() => {
            setTimeLeftSec(TimeLeftSec - 1)
            console.log(TimeLeftSec)
        }, ONE_SECOND_MS
        )
        return () => {
            clearInterval(timerID)
        }
    }, [TimeLeftSec]);

    return (
        <Text style={style.text} >After {TimeLeftSec} seconds the value of input will be aquil 1</Text>
    );
};
