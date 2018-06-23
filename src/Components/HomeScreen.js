/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Modal,
  TouchableHighlight,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from "react-native";
/* import Svg from "react-native-svg";*/
import Svg, { Circle } from "react-native-svg";
import {
  StackedAreaChart,
  BarChart,
  Grid,
  Line,
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

const MayData = [
  50,
  13,
  56,
  44,
  10,
  91,
  15,
  30,
  24,
  5, //10
  7,
  13,
  23,
  36,
  24,
  46,
  15,
  35,
  65,
  74, //20
  23,
  85,
  20,
  46,
  32,
  12,
  11,
  23,
  12,
  8, //30
  56
];

const JuneData = [
  74, //20
  23,
  85,
  20,
  46,
  32,
  12,
  11,
  23,
  12,
  8, //30
  50,
  13,
  56,
  44,
  10,
  91,
  15,
  30,
  24,
  5, //10
  7,
  13,
  23,
  36,
  24,
  46,
  15,
  35,
  65
];

const JulyData = [
  5,
  85,
  3,
  54,
  56,
  45,
  36,
  15,
  25,
  14,
  78,
  65,
  95,
  78,
  63,
  25,
  45,
  36,
  25,
  21,
  23,
  85,
  20,
  46,
  32,
  12,
  11,
  23,
  12,
  8, //30
  56
];

export default class HomeScreen extends Component {
  state = {
    data: [
      {
        value: MayData.reduce((a, b) => a + b) / MayData.length,
        label: "May",
        monthdata: MayData
      },
      {
        value: JuneData.reduce((a, b) => a + b) / JuneData.length,
        label: "June",
        monthdata: JuneData
      },
      {
        value: JulyData.reduce((a, b) => a + b) / JulyData.length,
        label: "July",
        monthdata: JulyData
      }
    ],
    modalVisible: false,
    month: [
      50,
      10,
      66,
      95,
      85,
      91,
      35,
      53,
      24,
      50, //10
      56,
      11,
      23,
      36,
      24,
      25,
      15,
      35,
      65,
      74, //20
      46,
      87,
      87,
      67,
      32,
      12,
      11,
      56,
      12,
      25 //30
    ],

    visible: true
  };

  testFunction = index => {
    //  alert("you clicked " + index + " " /* data[index] */);
    this.props.navigation.navigate("ChartTwo", {
      month: this.state.data[index].monthdata,
      visibler: index % 2 ? true : false
    });
    /*   this.setState({
      month: this.state.data[index].monthdata,
      visible: index % 2 ? true : false
    }); */
  };

  render() {
    const ScreenData = this.state.data;
    return (
      <View>
        <View alignItems="center" style={{ marginTop: 70 }}>
          <Text style={{ fontSize: 17, color: "black" }}>
            Avg Units Of Electricity Consumed Per Month
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <ScrollView style={{ margin: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <YAxis
                data={this.state.data}
                yAccessor={({ index }) => index}
                formatLabel={(_, index) => index}
                numberOfTicks={10}
                style={{ marginBottom: 5, margin: 5 }}
                contentInset={{ top: 30, bottom: 30 }}
                svg={{ fontSize: 10, fill: "grey" }}
              />
              <View style={{ margin: 5 }}>
                <View
                  style={{
                    flex: 1
                  }}
                >
                  <BarChart
                    style={{ flex: 1, marginLeft: 2, height: 150, width: 280 }}
                    data={this.state.data}
                    yAccessor={({ item }) => item.value}
                    svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={2}
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
              </View>
            </View>
            <Button
              title="Display"
              onPress={() =>
                this.props.navigation.navigate("Chart", {
                  PassingData: this.state.data
                })
              }
            />
          </ScrollView>
        </View>
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

/*







  <ScrollView horizontal={true}>
            <View style={{ width: 400 }}>
              <AreaChart
                style={{ height: 200, width: "100%" }}
                data={this.state.data}
                yAccessor={({ item }) => item.value}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: "rgba(134, 65, 244, 0.5)" }}
              >
                <Grid />
              </AreaChart>
              <XAxis
                data={this.state.data}
                yAccessor={({ index }) => index}
                scale={scale.scaleBand}
                contentInset={{ top: 10, bottom: 10 }}
                style={{ margin: 7 }}
                spacing={0.2}
                formatLabel={(_, index) => this.state.data[index].label}
              />
            </View>
          </ScrollView>


 <ScrollView horizontal={true}>
            {this.state.visible
              ? this.renderContent()
              : this.renderContentthirty()}
          </ScrollView>






*/
