// @flow
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Styles, Margins } from '../../styles';

const styles = StyleSheet.create({
	heading1: {
		marginBottom: Margins.small,
	},
	heading2: {
		marginBottom: Margins.small,
	},
	body: {
		marginBottom: Margins.small,
	},
});

export interface TextProps extends Text.propTypes {
	margins?: boolean;
}

export const Heading1 = (props: TextProps) => {
	const { children, style, margins, ...otherProps } = props;
	return (
		<Text
			style={[Styles.heading1, margins ? styles.heading1 : undefined, style]}
			{...otherProps}
		>
			{children}
		</Text>
	);
};

export const Heading2 = (props: TextProps) => {
	const { children, style, margins, ...otherProps } = props;
	return (
		<Text
			style={[Styles.heading2, margins ? styles.heading2 : undefined, style]}
			{...otherProps}
		>
			{children}
		</Text>
	);
};

export const Body = (props: TextProps) => {
	const { children, style, margins, ...otherProps } = props;
	return (
		<Text
			style={[Styles.body, margins ? styles.body : undefined, style]}
			{...otherProps}
		>
			{children}
		</Text>
	);
};
