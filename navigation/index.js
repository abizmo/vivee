import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { LaunchScreen, OnBoardingScreen, LoginScreen } from "../screens";

const screens = createStackNavigator(
  {
    Launch: LaunchScreen,
    OnBoarding: OnBoardingScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Launch"
  }
);

export default createAppContainer(screens);
