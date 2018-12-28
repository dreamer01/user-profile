import React, { Component } from "react";
import { ActivityIndicator, AsyncStorage, View } from "react-native";
import { connect } from "react-redux";

import { signInUser } from "../../store/actions/index";
import Routes from "../../navigation/routes";
import styles from "./styles";

class AuthLoadingScreen extends Component {
	constructor() {
		super();
		this._bootstrapAsync();
	}

	async _bootstrapAsync() {
		let userData = await AsyncStorage.getItem("userData");
		userData = JSON.parse(userData);
		if (userData) {
			this.props
				.signInUser({
					email: userData.email,
					password: userData.password
				})
				.then(() => this.props.navigation.navigate(Routes.APP_NAVIGATOR))
				.catch(error => console.log(error));
		} else this.props.navigation.navigate(Routes.AUTH_NAVIGATOR);
	}

	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
			</View>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	signInUser: ({ email, password }) =>
		dispatch(signInUser({ email, password, noPersistance: true }))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthLoadingScreen);
