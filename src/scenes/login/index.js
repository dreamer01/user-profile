import React, { Component } from "react";
import { Text, AsyncStorage, View, TextInput } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { signInUser } from "../../store/actions/index";
import Touchable from "../../components/vision/touchable";
import Routes from "../../navigation/routes";
import styles from "./styles";

class LoginScreen extends Component {
	static propTypes = {
		signInUser: PropTypes.func.isRequired
	};

	state = {
		email: "",
		password: ""
	};

	signupAction = this.signupAction.bind(this);
	handleEmailChange = this.handleEmailChange.bind(this);
	handlePasswordChange = this.handlePasswordChange.bind(this);
	handleSignInUser = this.handleSignInUser.bind(this);

	signupAction() {
		this.props.navigation.navigate(Routes.SIGN_UP);
	}

	handleEmailChange(email) {
		this.setState({
			email: email
		});
	}

	handlePasswordChange(password) {
		this.setState({
			password: password
		});
	}

	handleSignInUser() {
		// this.context.presentActivityIndicator();
		this.props
			.signInUser({
				email: this.state.email,
				password: this.state.password
			})
			.then(() => {
				// this.context.dismissActivityIndicator();
				if (this.props.currentUser.emailVerified === true) {
					AsyncStorage.getItem("userData") !== null &&
						AsyncStorage.setItem(
							"userData",
							JSON.stringify({
								email: this.state.email,
								password: this.state.password
							})
						);
					this.props.navigation.navigate(Routes.APP_NAVIGATOR);

					// if(this.props.userProfile.isProfile)
					// 	this.props.navigation.navigate(Routes.APP_NAVIGATOR);
					// else
					// 	this.props.navigation.navigate(Routes.CREATE_PROFILE)
				} else {
					this.props.currentUser
						.sendEmailVerification()
						.then(() => this.props.navigation.navigate(Routes.VERIFY_EMAIL));
				}
			})
			.catch(error => console.log(error, this.props));
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Welcome</Text>
				<View style={styles.illustration} />
				<View style={styles.inputContainer}>
					<TextInput
						onChangeText={this.handleEmailChange}
						style={styles.input}
						placeholder="Username"
						autoCapitalize={"none"}
						value={this.state.email}
					/>
					<TextInput
						onChangeText={this.handlePasswordChange}
						style={styles.input}
						placeholder="Password"
						autoCapitalize={"none"}
						secureTextEntry
						value={this.state.password}
					/>
				</View>
				<View style={styles.btnContainer}>
					<Touchable onPress={this.handleSignInUser}>
						<View style={styles.buttonLogin}>
							<Text style={styles.loginTitle}>Login</Text>
						</View>
					</Touchable>
					<Touchable onPress={this.signupAction}>
						<View style={styles.buttonSignup}>
							<Text style={styles.signupTitle}>Sign Up</Text>
						</View>
					</Touchable>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	authenticationError: state.authentication.error,
	currentUser: state.authentication.currentUser,
	userProfile: state.users.userProfile
});

const mapDispatchToProps = dispatch => ({
	signInUser: ({ email, password }) =>
		dispatch(signInUser({ email, password, noPersistance: true }))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen);
