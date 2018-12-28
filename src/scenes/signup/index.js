import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import {connect} from "react-redux"
import PropTypes from "prop-types"

import { signUpUser } from "../../store/actions"
import Touchable from "../../components/vision/touchable"
import Routes from "../../navigation/routes"
import styles from "./styles"

class SignupScreen extends Component {

	static propTypes = {
		signUpUser: PropTypes.func.isRequired
	}

	state={
		email: "",
		password:""
	}

	loginAction= this.loginAction.bind(this);
	handleSignUp= this.handleSignUp.bind(this);
	handleEmailChange = this.handleEmailChange.bind(this);
  handlePasswordChange = this.handlePasswordChange.bind(this);

	loginAction (){
    this.props.navigation.navigate(Routes.LOGIN);
	};

	handleSignUp(){
		const {email, password} = this.state;
		this.props.signUpUser({email,password})
		.then(() => {
			if(this.props.currentUser.emailVerified === false){
				this.props.currentUser.sendEmailVerification()
					.then(()=>this.props.navigation.navigate(Routes.VERIFY_EMAIL))
			}
			else{
				this.props.navigation.navigate(Routes.APP_NAVIGATOR)
			}
		})
		.catch (error => console.log(error))
		//this.props.navigation.navigate(Routes.APP_NAVIGATOR)
	}

	handleEmailChange(email) {
    this.setState({
			email: email
		})
	}

	handlePasswordChange(password) {
    this.setState({
			password: password
		})
	}

  render() {
    return (
			<View style={styles.container}>
				<Text style={styles.title}>Welcome! Please Sign Up.</Text>
				<View style={styles.illustration}></View>
				<View style={styles.inputContainer}>
				<TextInput
						onChangeText={this.handleEmailChange}
						style={styles.input} placeholder="Username"
						autoCapitalize={"none"}
						value={this.state.email}
					/>
					<TextInput
						onChangeText={this.handlePasswordChange}
						style={styles.input} placeholder="Password"
						autoCapitalize={"none"} secureTextEntry
						value={this.state.password}
					/>
				</View>
				<View style={styles.btnContainer}>
					<Touchable onPress={this.handleSignUp}>
						<View style={styles.button}>
							<Text style={styles.btnTitle} >Sign Up</Text>
						</View>
					</Touchable >
					{/*<Touchable onPress={this.loginAction}>
						<View style={styles.button}>
							<Text style={styles.btnTitle} >Login</Text>
						</View>
					</Touchable>*/}
				</View>
			</View>
    )
  }
}

const mapStateToProps = state => ({
  authenticationError: state.authentication.error,
  currentUser: state.authentication.currentUser
});

const mapDispatchToProps = dispatch => ({
  signUpUser: ({ email, password }) =>
    dispatch(signUpUser({ email, password, noPersistance: true }))
});

export default connect(mapStateToProps,mapDispatchToProps )(SignupScreen);

