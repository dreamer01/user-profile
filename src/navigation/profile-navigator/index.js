import { createStackNavigator } from "react-navigation";

import Routes from "../routes";
import UserProfileScreen from "../../scenes/user-profile"
import EditProfileScreen from "../../scenes/edit-profile";

const ProfileNavigator = createStackNavigator(
	{
		[Routes.USER_PROFILE]: UserProfileScreen,
		[Routes.EDIT_PROFILE]: EditProfileScreen,
	}
);

export default ProfileNavigator;
