import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";

import Routes from "../../../navigation/routes";
import Touchable from "../../../components/vision/touchable";
import SquareIcon from "../../../components/vision/square-icon";
import { keyExtractor } from "../../../utilities/helper";
import { getImages } from "./utilities";
import styles from "../styles";

class SelectAvatarScreen extends Component {
	state = {
		avatarType: ""
	};

	handleNext = this.handleNext.bind(this);
	renderAvatar = this.renderAvatar.bind(this);
	selectAvatar = this.selectAvatar.bind(this);

	selectAvatar(selectedAvatar) {
		this.setState({ avatarType: selectedAvatar });
	}

	renderAvatar({ item }) {
		return (
			<Touchable onPress={() => this.selectAvatar(item.value)}>
				<SquareIcon
					iconStyle={
						this.state.avatarType === item.value
							? styles.selectedIconStyle
							: styles.iconStyle
					}
					imageUrl={item.uri}
				/>
			</Touchable>
		);
	}

	handleNext() {
		const { userProfile } = this.props.navigation.state.params;
		this.props.navigation.navigate(Routes.SELECT_CITY, {
			userProfile: { ...userProfile, ...this.state }
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Select Avatar</Text>
				<View style={styles.avatarList}>
					<FlatList
						data={getImages({
							gender: this.props.navigation.state.params.userProfile.gender
						})}
						numColumns={2}
						renderItem={this.renderAvatar}
						keyExtractor={keyExtractor}
					/>
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

export default SelectAvatarScreen;
