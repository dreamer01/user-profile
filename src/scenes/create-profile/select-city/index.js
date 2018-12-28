import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";

import { updateUserProfile, getUserProfile } from "../../../store/actions";
import Routes from "../../../navigation/routes";
import Touchable from "../../../components/vision/touchable";
import { keyExtractor } from "../../../utilities/helper";
import { getCities } from "./utilities";
import styles from "../styles";

class SelectCityScreen extends Component {
	state = {
		city: ""
	};

	handleNext = this.handleNext.bind(this);
	selectCity = this.selectCity.bind(this);
	renderCity = this.renderCity.bind(this);

	selectCity(selectedCity) {
		this.setState({ city: selectedCity });
	}

	renderCity({ item }) {
		const isSelected = this.state.city === item;
		return (
			<Touchable onPress={() => this.selectCity(item)}>
				<View style={isSelected ? styles.citySelected : styles.city}>
					<Text
						style={isSelected ? styles.cityTitleSelected : styles.cityTitle}
					>
						{item}
					</Text>
				</View>
			</Touchable>
		);
	}

	handleNext() {
		const userProfile = {
			...this.props.navigation.state.params.userProfile,
			...this.state,
			...{ isProfile: true }
		};
		const userId = this.props.currentUser.uid;
		this.props.updateUserProfile({ userId, userProfile }).then(() => {
			this.props
				.reloadUserProfile({ userId })
				.then(() => this.props.navigation.navigate(Routes.USER_PROFILE));
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Select City</Text>
				<View style={styles.cityList}>
					<FlatList
						data={getCities()}
						numColumns={2}
						renderItem={this.renderCity}
						keyExtractor={keyExtractor}
					/>
				</View>
				<Touchable onPress={this.handleNext}>
					<View style={styles.button}>
						<Text style={styles.btnTitle}>Done</Text>
					</View>
				</Touchable>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.authentication.currentUser
});

const mapDispatchToProps = dispatch => ({
	updateUserProfile: ({ userId, userProfile }) =>
		dispatch(updateUserProfile({ userId, userProfile })),
	reloadUserProfile: ({ userId }) => dispatch(getUserProfile({ userId }))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectCityScreen);
