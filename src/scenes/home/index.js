import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import Routes from "../../navigation/routes";
import styles from "./styles";

class HomeScreen extends Component {
	componentDidMount() {
		!this.props.userProfile.isProfile &&
			this.props.navigation.navigate(Routes.CREATE_PROFILE);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Home</Text>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	userProfile: state.users.userProfile
});

const mapDispatchToProps = dispatch => ({
	signInUser: ({ email, password }) =>
		dispatch(signInUser({ email, password, noPersistance: true }))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen);
