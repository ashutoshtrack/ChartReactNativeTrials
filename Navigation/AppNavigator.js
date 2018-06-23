import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../src/Components/HomeScreen";
import DisplayScreen from "../src/Components/DisplayScreen";
import SingleChartScreen from "../src/Components/SingleChartScreen";

export const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Chart: {
    screen: DisplayScreen,
    navigationOptions: {
      title: "Svg Chart",

      titleStyle: {
        backgroundColor: "teal"
      }
    }
  },
  ChartTwo: {
    screen: SingleChartScreen,
    navigationOptions: {
      title: "Svg Chart",

      titleStyle: {
        backgroundColor: "teal"
      }
    }
  }
});
