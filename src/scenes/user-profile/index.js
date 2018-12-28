import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Touchable from "../../components/vision/touchable";
import Routes from "../../navigation/routes";
import styles from "./styles";

class UserProfileScreen extends Component {
	static propTypes = {
		userProfile: PropTypes.object,
		navigation: PropTypes.object
	};

	editProfile = this.editProfile.bind(this);
	signOutAsync = this.signOutAsync.bind(this);

	async signOutAsync() {
		await AsyncStorage.clear();
		this.props.navigation.navigate(Routes.AUTH_LOADING);
	}

	editProfile() {
		this.props.navigation.navigate(Routes.EDIT_PROFILE);
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.title}>{this.props.userProfile.userName}</Text>
				</View>
				<View style={styles.btnContainer}>
					<Touchable onPress={this.editProfile}>
						<View style={styles.button}>
							<Text style={styles.btnTitle}>Edit Profile</Text>
						</View>
					</Touchable>
					<Touchable onPress={this.signOutAsync}>
						<View style={styles.button}>
							<Text style={styles.btnTitle}>Sign Out</Text>
						</View>
					</Touchable>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	userProfile: state.users.userProfile
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfileScreen);
