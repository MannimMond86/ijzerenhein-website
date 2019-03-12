// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { Heading1 } from '../../components';
import { Texts } from '../../styles';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	code: {
		...Texts.heading2,
		fontFamily: 'Roboto Slab',
		textTransform: 'uppercase',
		fontSize: 38,
	},
	creator: {
		...Texts.heading2,
		fontFamily: 'Permanent Marker',
	},
});

type PropsType = {
	style: any,
	width: number,
	animValue: any,
};
type StateType = {
	animValue: Animated.Value,
	anim?: any,
};

export class HomeStartPage extends Component<PropsType, StateType> {
	state = {
		animValue: new Animated.Value(0),
	};

	static getDerivedStateFromProps(props: PropsType, state: StateType) {
		if (!state.anim) {
			const anim = Animated.timing(state.animValue, {
				delay: 100,
				duration: 10000,
				toValue: 1,
			});
			anim.start();
			return {
				anim,
			};
		}
		return null;
	}

	render() {
		const { style, width, animValue } = this.props;
		// const { animValue } = this.state;
		return (
			<Animated.View
				style={[
					styles.container,
					style,
					{
						opacity: animValue.interpolate({
							inputRange: [-1, 0, 1],
							outputRange: [1, 1, -1],
						}),
						transform: [
							{
								scale: animValue.interpolate({
									inputRange: [-1, 0, 1],
									outputRange: [1, 1, 6],
								}),
							},
						],
					},
				]}
			>
				<Heading1>IjzerenHein</Heading1>
				<View style={styles.row}>
					<Text style={styles.code}>App Developer</Text>
					<Text style={styles.creator}> / Creator</Text>
				</View>
			</Animated.View>
		);
	}
}
