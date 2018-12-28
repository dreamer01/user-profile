
import { createStackNavigator } from "react-navigation";

import Routes from "../routes";
import CreateProfileScreen from "../../scenes/create-profile"
import AddNameScreen from "../../scenes/create-profile/add-name"
import SelectAvatarScreen from "../../scenes/create-profile/select-avatar"
import SelectCityScreen from "../../scenes/create-profile/select-city"

const CreateProfileNavigator = createStackNavigator(
	{
		[Routes.CREATE_PROFILE]: CreateProfileScreen,
		[Routes.ADD_NAME]: AddNameScreen,
		[Routes.SELECT_AVATAR]: SelectAvatarScreen,
		[Routes.SELECT_CITY]: SelectCityScreen
	}
);

export default CreateProfileNavigator;
