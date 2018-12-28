import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "../../../styles";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	inputDM: {
		fontFamily: Fonts.Quicksand,
		width: width * 0.2,
		padding: 10,
		borderWidth: 1,
		borderColor: Colors.bgLight,
		borderRadius: 10,
		margin: 10,
		backgroundColor: Colors.bgMedium,
		color: Colors.text,
		textAlign: "center"
	},
	inputYYYY: {
		fontFamily: Fonts.Quicksand,
		flex: 1,
		padding: 10,
		borderWidth: 1,
		borderColor: Colors.bgLight,
		borderRadius: 10,
		margin: 10,
		backgroundColor: Colors.bgMedium,
		color: Colors.text,
		textAlign: "center"
	},
	separator: {
		color: Colors.bgLight
	}
});

export default styles;
