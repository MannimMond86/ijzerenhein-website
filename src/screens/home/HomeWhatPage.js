// @flow
import React, { Component } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Heading2, Body } from '../../components';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

type PropsType = {
	style: any,
	width: number,
	animValue: any,
};
type StateType = {};

export class HomeWhatPage extends Component<PropsType, StateType> {
	render() {
		const { style, width, animValue } = this.props;
		return (
			<Animated.View
				style={[
					styles.container,
					style,
					{
						opacity: animValue.interpolate({
							inputRange: [-1, 0, 1],
							outputRange: [0, 1, 0],
						}),
						transform: [{ translateX: Animated.multiply(animValue, -width) }],
					},
				]}
			>
				<Heading2 margins>What I do</Heading2>
				<Body>
					I build Apps and technologies for building Apps using react-native and
					JavaScript. I help clients along the way to polish their ideas and be
					a mentor and counselor during the app development process. And in my
					free time I also code and enjoy writing animation- and graphical
					libraries.
				</Body>
			</Animated.View>
		);
	}
}
