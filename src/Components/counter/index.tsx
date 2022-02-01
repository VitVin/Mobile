import React from 'react';
import { Text } from 'react-native';
import { style } from './style';

interface ICounter {
    counter: number;
}

export const CounterText = ({ counter }: ICounter) => {

    return (
        <Text style={style.text}>{counter}</Text>
    );
};