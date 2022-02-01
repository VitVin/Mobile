import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import { MainForm } from './mainForm';
import { Style } from '../../Style';

export const App = () => {

	return (
		<SafeAreaView>
			<StatusBar barStyle="dark-content" backgroundColor="#252E14" />
			<ImageBackground
				source={require('./assets/background.jpg')}
				resizeMode='cover'
				style={Style.Background}>
				<MainForm />
			</ImageBackground>
		</SafeAreaView>
	);
};