import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { style } from './style';

interface IButton {
    path: ImageSourcePropType;
}

export const Button = ({ path }: IButton) => {

    return (
        <View style={style.Button}>
            <Image
                style={style.image}
                source={path} />
        </View>
    );
};