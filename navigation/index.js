import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  OnBoardingScreen,
  LoginScreen,
  RegisterScreen,
  HomeScreen
} from "../screens";

const screens = createStackNavigator(
  {
    OnBoarding: OnBoardingScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: "OnBoarding"
  }
);

export default createAppContainer(screens);
