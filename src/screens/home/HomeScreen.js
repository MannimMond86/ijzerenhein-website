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
import { PageIndicator } from './PageIndicator';
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
	pageIndicators: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: Margins.regular,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

type PropsType = {};
type StateType = {
	width: number,
	pageIndexAnimValue: Animated.Value,
};

export class HomeScreen extends Component<PropsType, StateType> {
	_pageIndex = 0;
	_anim = undefined;
	state = {
		width: Dimensions.get('window').width,
		pageIndex: new Animated.Value(this._pageIndex),
	};

	/*componentDidMount() {
		this._anim = Animated.spring(this.state.pageIndex, {
			toValue: 0,
		}).start(() => {
			this._anim = undefined;
		});
	}*/

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
				<View style={styles.pageIndicators}>
					<PageIndicator
						index={0}
						animValue={pageIndex}
						onPress={this.onPressPageIndicator}
					/>
					<PageIndicator
						index={1}
						animValue={pageIndex}
						onPress={this.onPressPageIndicator}
					/>
					<PageIndicator
						index={2}
						animValue={pageIndex}
						onPress={this.onPressPageIndicator}
					/>
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

	setPageIndex(pageIndex: number) {
		this._pageIndex = pageIndex;
		if (this._anim) this._anim.stop();
		this._anim = Animated.spring(this.state.pageIndex, {
			toValue: this._pageIndex,
		}).start(() => {
			this._anim = undefined;
		});
	}

	onPressBack = () => {
		if (this._pageIndex <= 0) return;
		this.setPageIndex(this._pageIndex - 1);
	};

	onPressForward = () => {
		if (this._pageIndex >= 2) return;
		this.setPageIndex(this._pageIndex + 1);
	};

	onPressPageIndicator = (pageIndex: number) => {
		if (this._pageIndex === pageIndex) return;
		this.setPageIndex(pageIndex);
	};
}
