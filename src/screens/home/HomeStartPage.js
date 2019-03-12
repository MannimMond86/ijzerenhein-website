// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { Heading1 } from '../../components';
import { Texts } from '../../styles';
import * as Clipped from 'react-native-clipped';

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
type StateType = {};

export class HomeStartPage extends Component<PropsType, StateType> {
	render() {
		const { style, animValue } = this.props;
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
						/*transform: [
							{
								scale: animValue.interpolate({
									inputRange: [-1, 0, 1],
									outputRange: [1, 1, 6],
								}),
							},
						],*/
					},
				]}
			>
				<Clipped.View>
					<Heading1>IjzerenHein</Heading1>
				</Clipped.View>
				<Clipped.View style={styles.row}>
					<Text style={styles.code}>App Developer</Text>
					<Text style={styles.creator}> / Creator</Text>
				</Clipped.View>
			</Animated.View>
		);
	}
}
