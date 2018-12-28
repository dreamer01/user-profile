import { createBottomTabNavigator } from "react-navigation";

import HomeScreen from "../../scenes/home"
import ProfileNavigator from "../profile-navigator"
import Routes from "../routes";

const AppNavigator = createBottomTabNavigator({
	[Routes.HOME]: HomeScreen,
	[Routes.USER_PROFILE]: ProfileNavigator,
});

export default AppNavigator;
