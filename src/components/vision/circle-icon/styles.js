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
		width: width * 0.2,
		height: width * 0.2,
		borderRadius: width * 0.1,
		borderWidth: 3
	}
});

export default styles;
