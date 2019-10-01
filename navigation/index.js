import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { theme } from "../constants";

const { colors, ratio } = theme;

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
    initialRouteName: "OnBoarding",
    defaultNavigationOptions: {
      headerLeft: null,
      headerStyle: {
        backgroundColor: colors.primary,
        height: 240 / ratio
      }
    }
  }
);

export default createAppContainer(screens);
