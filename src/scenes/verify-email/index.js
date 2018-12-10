import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from "prop-types"
import {connect} from "react-redux"

import { reloadUser } from "../../store/actions"
import Touchable from "../../components/vision/touchable"
import styles from "./styles"
import Routes from '../../navigation/routes';

class VerifyEmailScreen extends Component {

	static propTypes ={}

	resendMail=this.resendMail.bind(this);
	emailVerified=this.emailVerified.bind(this);

	resendMail() {
		this.props.currentUser.sendEmailVerification();
	}

	async emailVerified(){
		this.props.reloadUser()
			.then(()=> {
				this.props.currentUser.emailVerified && this.props.navigation.navigate(Routes.APP_NAVIGATOR);
			})
			.catch(error=> console.log(error));
	}

	render() {
		return (
			<View style={styles.container} >
				<Text style={styles.title} > Please Verify Your Email </Text>
				<Text style={styles.title} > Check your email for the link.</Text>
				<Touchable onPress={this.resendMail}>
					<View style={styles.button}>
						<Text style={styles.btnTitle} >Resend Verification Mail</Text>
					</View>
				</Touchable >
				<Touchable onPress={this.emailVerified}>
					<View style={styles.button}>
						<Text style={styles.btnTitle} >Done</Text>
					</View>
				</Touchable >
			</View>
		)
	}
}

mapStateToProps = state => ({
	currentUser: state.authentication.currentUser
});

mapDispatchToProps = dispatch => ({
	reloadUser: () => dispatch(reloadUser())
});

export default connect(mapStateToProps,mapDispatchToProps)(VerifyEmailScreen);
