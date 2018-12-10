import React, { Component } from 'react'
import { Text, View , Button , AsyncStorage} from 'react-native'

import Routes from "../../navigation/routes"
import styles from "./styles"

class HomeScreen extends Component {

	signOutAsync=this.signOutAsync.bind(this);

	async signOutAsync(){
    await AsyncStorage.clear();
    this.props.navigation.navigate(Routes.AUTH_LOADING);
  };

	render() {
		return (
			<View style={styles.container}>
				<Button onPress={this.signOutAsync} title="Sign Out" />
			</View>
		)
	}
}

export default HomeScreen;
