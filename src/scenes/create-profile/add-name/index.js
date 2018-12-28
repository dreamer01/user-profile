import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

import Routes from "../../../navigation/routes";
import CircleIcon from "../../../components/vision/circle-icon";
import Touchable from "../../../components/vision/touchable";
import { boy, girl, other } from "../../../utilities/images";
import styles from "../styles";

class AddNameScreen extends Component {
	state = {
		userName: "",
		firstName: "",
		lastName: ""
	};

	handleNext = this.handleNext.bind(this);
	setUserName = this.setUserName.bind(this);
	setFirstName = this.setFirstName.bind(this);
	setLastName = this.setLastName.bind(this);
	selectGender = this.selectGender.bind(this);

	setUserName(userName) {
		this.setState({ userName });
	}
	setFirstName(firstName) {
		this.setState({ firstName });
	}
	setLastName(lastName) {
		this.setState({ lastName });
	}

	selectGender(gender) {
		this.setState({ gender });
	}

	handleNext() {
		this.state.gender === "other"
			? this.props.navigation.navigate(Routes.SELECT_CITY, {
					userProfile: { ...this.state, ...{ avatarType: "other" } }
			  })
			: this.props.navigation.navigate(Routes.SELECT_AVATAR, {
					userProfile: this.state
			  });
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						onChangeText={this.setUserName}
						style={styles.input}
						placeholder="User Name"
						autoCapitalize={"none"}
						value={this.state.userName}
					/>
					<TextInput
						onChangeText={this.setFirstName}
						style={styles.input}
						placeholder="First Name"
						value={this.state.firstName}
					/>
					<TextInput
						onChangeText={this.setLastName}
						style={styles.input}
						placeholder="Last Name"
						value={this.state.lastName}
					/>
				</View>
				<View style={styles.genderContainer}>
					<Touchable onPress={() => this.selectGender("boy")}>
						<CircleIcon
							iconStyle={
								this.state.gender === "boy"
									? styles.selectedIconStyle
									: styles.iconStyle
							}
							imageUrl={boy}
						/>
					</Touchable>
					<Touchable onPress={() => this.selectGender("girl")}>
						<CircleIcon
							iconStyle={
								this.state.gender === "girl"
									? styles.selectedIconStyle
									: styles.iconStyle
							}
							imageUrl={girl}
						/>
					</Touchable>
					<Touchable onPress={() => this.selectGender("other")}>
						<CircleIcon
							iconStyle={
								this.state.gender === "other"
									? styles.selectedIconStyle
									: styles.iconStyle
							}
							imageUrl={other}
						/>
					</Touchable>
				</View>
				<Touchable onPress={this.handleNext}>
					<View style={styles.button}>
						<Text style={styles.btnTitle}>Next</Text>
					</View>
				</Touchable>
			</View>
		);
	}
}

export default AddNameScreen;
