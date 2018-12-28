import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

import Touchable from "../../components/vision/touchable"
import DOB from "../../components/vision/dob"
import styles from "./styles"

class EditProfileScreen extends Component {

	state= {
		displayName: "",
		bio: "",
		dob:"",
		phoneNumber:""
	}

	updateUserProfile=this.updateUserProfile.bind(this);
	setDisplayName=this.setDisplayName.bind(this);
	setBio=this.setBio.bind(this);
	// u= this.u.bind(this);
	setPhNumber= this.setPhNumber.bind(this);

	setDisplayName(displayName){
		this.setState({displayName})
	}

	setBio(bio){
		this.setState({bio})
	}
	setPhNumber(phoneNumber){
		this.setState({phoneNumber})
	}

	updateUserProfile() {}

	updateInput = () => {}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						onChangeText={this.setDisplayName}
						style={styles.input} placeholder="Display Name"
						value={this.state.displayName}
					/>
					<TextInput
						onChangeText={this.setBio}
						multiline={true}
						style={styles.input} placeholder="Bio"
						maxLength = {99}
						value={this.state.bio}
					/>
					<DOB/>
					<TextInput
						onChangeText={this.setPhNumber}
						style={styles.input} placeholder="Phone"
						keyboardType= "phone-pad"
						maxLength={10}
						value={this.state.phoneNumber}
					/>
					<TextInput
						onChangeText={this.updateInput}
						style={styles.input} placeholder="City"
						textContentType = "addressCity"
						value={""}
					/>
				</View>
				<View style={styles.btnContainer}>
					<Touchable onPress={this.updateUserProfile} >
						<View style={styles.button}>
							<Text style={styles.btnTitle} >Save</Text>
						</View>
					</Touchable>
				</View>
			</View>
		)
	}
}

export default EditProfileScreen;
