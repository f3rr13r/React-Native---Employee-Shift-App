// Import libraries for making a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';


// Make a component
class Header extends Component {
	render() {
		const { headerTitle } = this.props;
		const { viewStyle, textStyle } = styles;

		return (
			<View style={viewStyle}>
				<Text style={textStyle}>{headerTitle}</Text>
			</View>
		);
	}	
}

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
	},
		textStyle: {
		fontSize: 20,
	}
};


// Make the component available to other parts of the app

export { Header };