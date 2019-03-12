// @flow
import React, { Component } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Heading2, Body } from '../../components';
import { Margins } from '../../styles';

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

export class HomeWhoPage extends Component<PropsType, StateType> {
	render() {
		const { style, animValue, width } = this.props;
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
				<Heading2 margins>Who am I</Heading2>
				<Body>
					Hi, my name is Hein Rutjes and I'm a seasoned app/software developer
					with 20+ years of professional software development experience. I'm
					passionate about app development, from UX to the cloud and everything
					in between. I create delightful experiences and try to take animations
					to the next level.
				</Body>
			</Animated.View>
		);
	}
}
