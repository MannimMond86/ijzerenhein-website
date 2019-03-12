// @flow
import React, { Component } from 'react';
import { StyleSheet, Animated, Image } from 'react-native';
import { Body } from '../../components';
import { Margins, Shadows, Colors } from '../../styles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 128,
		height: 128,
		borderRadius: 64,
		borderWidth: 2,
		borderColor: Colors.white,
		marginBottom: Margins.regular,
		...Shadows.elevation1,
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
				<Image
					style={styles.image}
					source={require('../../assets/face.jpeg')}
				/>
				<Body>
					Hi, my name is Hein Rutjes and I'm a seasoned app/software developer
					with 20+ years of professional software development experience. I'm
					passionate about app development, from UX to the cloud and everything
					in between. I like to create delightful experiences and take
					animations to the next level.
				</Body>
			</Animated.View>
		);
	}
}
