/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
/* import Svg from "react-native-svg";*/
import Svg, { Circle } from "react-native-svg";
import {
  StackedAreaChart,
  BarChart,
  Grid,
  AreaChart,
  XAxis,
  YAxis
} from "react-native-svg-charts";
import * as shape from "d3-shape";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie
} from "victory-native";
import * as scale from "d3-scale";

//import { StackedAreaChart } from "react-native-svg-charts";

export default class App extends Component {
  state = {
    data: [
      {
        value: 50,
        label: "January"
      },
      {
        value: 10,
        label: "February"
      },
      {
        value: 85,
        label: "March"
      }
    ]
  };

  testFunction = index => {
    alert("you clicked " + index + " " /* data[index] */);
  };

  render() {
    return (
      <View
        style={{ flexDirection: "column", height: 200, paddingVertical: 16 }}
      >
        <BarChart
          style={{ flex: 1, marginLeft: 8 }}
          data={this.state.data}
          yAccessor={({ item }) => item.value}
          svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          gridMin={0}
          clicked={this.testFunction}
        >
          <Grid direction={Grid.Direction.HORIZONTAL} />
        </BarChart>
        <XAxis
          data={this.state.data}
          yAccessor={({ index }) => index}
          scale={scale.scaleBand}
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          formatLabel={(_, index) => this.state.data[index].label}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
