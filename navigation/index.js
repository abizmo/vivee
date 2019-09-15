import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { OnBoardingScreen, LoginScreen } from "../screens";

const screens = createStackNavigator(
  {
    OnBoarding: OnBoardingScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "OnBoarding"
  }
);

export default createAppContainer(screens);
