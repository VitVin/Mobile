import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { style } from './style';

interface IProps {
    onChangeText: (value: string) => void;
    operand: number;
}

export const Input: FC<IProps> = ({ onChangeText, operand }) => {
    return (
        <TextInput
            onChangeText={onChangeText}
            value={`${operand}`}
            keyboardType='numeric'
            style={style.input} />
    );
};