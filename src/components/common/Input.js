import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

	const { containerStyle, labelStyle, inputStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>
				{label}
			</Text>
			
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				style={inputStyle}
			/>
		</View>
	);
};

const styles = {
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},

	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},

	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	}
};


export { Input };