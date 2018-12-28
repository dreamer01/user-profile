import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";

import styles from "./styles";

class CircleIcon extends Component {
	static propTypes = {
		imageUrl: PropTypes.any,
		iconStyle: PropTypes.object
	};

	render() {
		return (
			<View style={styles.container}>
				<Image
					source={this.props.imageUrl}
					style={[styles.imageIcon, this.props.iconStyle]}
				/>
			</View>
		);
	}
}

export default CircleIcon;
