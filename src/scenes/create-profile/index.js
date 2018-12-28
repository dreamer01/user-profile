import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Routes from "../../navigation/routes"
import Touchable from "../../components/vision/touchable"
import styles from './styles';

class CreateProfileScreen extends Component {

	handleNext= this.handleNext.bind(this);

	handleNext() {
		this.props.navigation.navigate(Routes.ADD_NAME)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title} >You must Create Profile to proceed.</Text>
				<View style={styles.illustration} ></View>
				<Touchable onPress={this.handleNext}>
					<View style={styles.button}>
						<Text style={styles.btnTitle} >Next</Text>
					</View>
				</Touchable>
			</View>
		)
	}
}

export default CreateProfileScreen;
