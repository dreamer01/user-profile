import React, { Component } from 'react'
import {
	ActivityIndicator,
  AsyncStorage,
	StatusBar,
	View
} from 'react-native'

import Routes from "../../navigation/routes"
import styles from "./styles"

class AuthLoadingScreen extends Component {
	constructor() {
    super();
    this._bootstrapAsync();
  }

  async _bootstrapAsync() {
    const userData = await AsyncStorage.getItem('userData');
    this.props.navigation.navigate(userData ? Routes.APP_NAVIGATOR : Routes.AUTH_NAVIGATOR);
  };

  render() {
    return (
      <View style={styles.container}>
				<ActivityIndicator />
      </View>
    );
	}
}

export default AuthLoadingScreen;
