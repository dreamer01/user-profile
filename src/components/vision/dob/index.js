import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

import styles from './styles';

class DOB extends Component {



	render() {
		return (
			<View style={styles.container}>
				<TextInput placeholder="DD" style={styles.inputDM} maxLength={2} keyboardType="phone-pad" />
				<Text style={styles.separator} >/</Text>
				<TextInput placeholder="MM" style={styles.inputDM} maxLength={2} keyboardType="phone-pad"/>
				<Text style={styles.separator} >/</Text>
				<TextInput placeholder="YYYY" style={styles.inputYYYY} maxLength={4} keyboardType="phone-pad"/>
			</View>
		)
	}
}

export default DOB;
