import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../styles";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		margin: 5
	},
	imageIcon: {
		width: width * 0.3,
		height: width * 0.3,
		borderRadius: 5,
		borderWidth: 2
	}
});

export default styles;
