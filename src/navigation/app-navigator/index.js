import { createBottomTabNavigator } from "react-navigation";

import HomeScreen from "../../scenes/home"
import Routes from "../routes";

const AppNavigator = createBottomTabNavigator({
  [Routes.HOME]: HomeScreen,
});

export default AppNavigator;
