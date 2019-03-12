import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { HomeScreen } from './screens/home';
import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';
import { Styles } from './styles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
	},
	image: {
		flex: 1,
		// maxWidth: 1900,
	},
});

const AppNavigator = createSwitchNavigator({
	Home: {
		screen: HomeScreen,
		path: 'home',
	},
});

const AppContainer = createBrowserApp(AppNavigator);

export class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					style={styles.image}
					source={require('./assets/background.png')}
				>
					<AppContainer />
				</ImageBackground>
			</View>
		);
	}
}
