import { createStackNavigator } from "react-navigation";

import Routes from "../routes";
import LoginScreen from "../../scenes/login"
import SignupScreen from "../../scenes/signup";
import VerifyEmailScreen from "../../scenes/verify-email"

const AuthNavigator = createStackNavigator(
	{
		[Routes.LOGIN]: LoginScreen,
		[Routes.SIGN_UP]: SignupScreen,
		[Routes.VERIFY_EMAIL]: VerifyEmailScreen
	},
	{
		headerMode: 'none',
	}
);

export default AuthNavigator;
