import React from "react"
import {createAppContainer,createSwitchNavigator} from "react-navigation"

import AuthLoadingScreen from "../scenes/auth-loading"
import AppNavigator from "./app-navigator"
import AuthNavigator from "./auth-navigator"
import Routes from "./routes"

export default MainNavigator =  createAppContainer(createSwitchNavigator(
  {
		[Routes.AUTH_LOADING]: AuthLoadingScreen,
    [Routes.AUTH_NAVIGATOR]: AuthNavigator,
    [Routes.APP_NAVIGATOR]: AppNavigator
  },
  {
    initialRouteName: Routes.AUTH_LOADING,
  }
));
