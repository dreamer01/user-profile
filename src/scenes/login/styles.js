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
	illustration:{
		width: width * 0.6,
		height: width * 0.6,
		backgroundColor: Colors.bgLight,
		borderRadius: 20,
		marginVertical: 40
	},
	inputContainer:{
		marginTop: 30
	},
	input:{
		fontFamily: Fonts.Quicksand,
		width: width * 0.8,
		padding: 10,
		paddingLeft: 20,
		borderWidth: 1,
		borderColor: Colors.bgLight,
		borderRadius: 5,
		margin: 10,
		backgroundColor: Colors.bgMedium,
		color: Colors.text
	},
	btnContainer:{
		flexDirection: "row",
		width: width * 0.8,
		justifyContent: "space-between",
		marginTop: 20
	},
	button:{
		width: width * 0.35,
		padding: 10,
		borderRadius: 5,
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
