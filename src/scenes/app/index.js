import React, { Component } from "react";
import { Provider } from "react-redux";
import { View, Text, StatusBar } from "react-native";

import store from "../../store";
import initFirebaseApp from "../../firebase";
import MainNavigator from "../../navigation";
import styles from "./styles";

// initialize firebase
export const firebaseApp = initFirebaseApp();

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<StatusBar />
					<MainNavigator />
				</View>
			</Provider>
		);
	}
}
