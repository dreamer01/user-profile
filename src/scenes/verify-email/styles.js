import { StyleSheet, Dimensions } from "react-native"
import { Colors, Fonts } from "../../styles"

const { width} = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.bgDark
	},
	title:{
		fontFamily: Fonts.Quicksand,
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.title,
		marginTop: 50

	},
	button:{
		marginTop: 50,
		width: width * 0.7,
		padding: 10,
		borderRadius: 10,
		backgroundColor: Colors.bgButton
	},
	btnTitle:{
		fontFamily: Fonts.Quicksand,
		textAlign: "center",
		fontWeight: "bold",
		color: Colors.bgMedium
	}
})

export default styles;
