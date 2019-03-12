// @flow
import React from 'react';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import { Colors } from '../../styles';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: Ionicons;
}`;

// Create stylesheet
const style: any = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
	style.styleSheet.cssText = iconFontStyles;
} else {
	style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
// $FlowFixMe
document.head.appendChild(style);

type IconProps = {
	name: any,
	color?: string,
	size?: number,
};

export const Icon = (props: IconProps) => (
	<IonIcon
		name={props.name}
		color={props.color || Colors.white}
		size={props.size || 80}
	/>
);
