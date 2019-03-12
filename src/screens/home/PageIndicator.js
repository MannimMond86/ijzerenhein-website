// @flow
import React, { Component } from 'react';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Colors, Margins } from '../../styles';

const styles = StyleSheet.create({
	container: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: Colors.white,
		marginHorizontal: Margins.tiny,
	},
});

type PropsType = {
	style: any,
	index: number,
	animValue: any,
	onPress: number => void,
};
type StateType = {};

export class PageIndicator extends Component<PropsType, StateType> {
	render() {
		const { style, index, animValue } = this.props;
		return (
			<TouchableOpacity onPress={this.onPress} style={style}>
				<Animated.View
					style={[
						styles.container,
						{
							transform: [
								{
									scale: animValue.interpolate({
										inputRange: [
											index - 2,
											index - 1,
											index,
											index + 1,
											index + 2,
										],
										outputRange: [1, 1, 1.6, 1, 1],
									}),
								},
							],
						},
					]}
				/>
			</TouchableOpacity>
		);
	}

	onPress = () => {
		this.props.onPress(this.props.index);
	};
}
