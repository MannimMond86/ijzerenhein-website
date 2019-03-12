// @flow
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Animated,
	TouchableOpacity,
} from 'react-native';
import { HomeStartPage } from './HomeStartPage';
import { HomeWhoPage } from './HomeWhoPage';
import { HomeWhatPage } from './HomeWhatPage';
import { Icon } from '../../components';
import { Margins } from '../../styles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	page: {
		...StyleSheet.absoluteFillObject,
		marginHorizontal: Margins.huge,
	},
	navContainer: {
		...StyleSheet.absoluteFillObject,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: Margins.regular,
	},
});

type PropsType = {};
type StateType = {
	width: number,
	pageIndexAnimValue: Animated.Value,
};

export class HomeScreen extends Component<PropsType, StateType> {
	_pageIndex = 0;
	state = {
		width: Dimensions.get('window').width,
		pageIndex: new Animated.Value(0),
	};

	render() {
		const { width, pageIndex } = this.state;
		return (
			<View style={styles.container} onLayout={this.onLayout}>
				<HomeStartPage
					style={styles.page}
					width={width}
					animValue={pageIndex.interpolate({
						inputRange: [-1, 0, 1, 2],
						outputRange: [-1, 0, 1, 1],
					})}
				/>
				<HomeWhoPage
					style={styles.page}
					width={width}
					animValue={pageIndex.interpolate({
						inputRange: [0, 1, 2, 3],
						outputRange: [-1, 0, 1, 1],
					})}
				/>
				<HomeWhatPage
					style={styles.page}
					width={width}
					animValue={pageIndex.interpolate({
						inputRange: [1, 2, 3, 4],
						outputRange: [-1, 0, 1, 1],
					})}
				/>
				<View style={styles.navContainer}>
					<TouchableOpacity onPress={this.onPressBack}>
						<Icon name="arrow-back" />
					</TouchableOpacity>
					<TouchableOpacity onPress={this.onPressForward}>
						<Icon name="arrow-forward" />
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	onLayout = event => {
		const { width } = event.nativeEvent.layout;
		if (this.state.width !== width) {
			this.setState({ width });
		}
	};

	onScroll = event => {
		this.state.scrollOffset.setValue(event.nativeEvent.contentOffset.x);
	};

	onPressBack = () => {
		if (this._pageIndex <= 0) return;
		this._pageIndex--;

		Animated.spring(this.state.pageIndex, {
			toValue: this._pageIndex,
		}).start();
	};

	onPressForward = () => {
		if (this._pageIndex >= 2) return;
		this._pageIndex++;

		Animated.spring(this.state.pageIndex, {
			toValue: this._pageIndex,
		}).start();
	};
}
