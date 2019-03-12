// @flow
import { StyleSheet } from 'react-native';

export const Colors = {
	white: '#FFFFFF',
	black: '#000000',
};

export const Margins = {
	regular: 40,
	small: 20,
	tiny: 10,
	large: 60,
	huge: 100,
};

export const Rounding = {
	regular: 10,
};

export const Texts = {
	heading1: {
		color: Colors.white,
		fontFamily: 'Raleway',
		fontWeight: 'bold',
		fontSize: 100,
		textShadowOffset: { width: 1, height: 3 },
		textShadowRadius: 4,
		textShadowColor: '#00000080',
	},
	heading2: {
		color: Colors.white,
		fontFamily: 'Raleway',
		fontWeight: 'bold',
		fontSize: 40,
		textShadowOffset: { width: 1, height: 2 },
		textShadowRadius: 4,
		textShadowColor: '#00000080',
	},
	body: {
		color: Colors.white,
		fontFamily: 'Raleway',
		fontWeight: 'bold',
		fontSize: 26,
		lineHeight: 32,
		letterSpacing: 1,
		textShadowOffset: { width: 1, height: 2 },
		textShadowRadius: 4,
		textShadowColor: '#00000080',
	},
};

export const Shadows = {
	elevation1: {
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: -2,
		},
		shadowRadius: 14,
		shadowOpacity: 0.08,
		elevation: 1,
	},
};

export const Styles = StyleSheet.create({
	heading1: Texts.heading1,
	heading2: Texts.heading2,
	body: Texts.body,
	flex: { flex: 1 },
	elevation1: Shadows.elevation1,
});
