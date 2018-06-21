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
  XAxis
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
    data: [50, 10, 40, 95, 53]
  };

  testFunction = index => {
    alert("you clicked " + index + " " /* data[index] */);
  };
  render() {
    /*    const data = [
      {
        month: new Date(2015, 0, 1),
        dates: 400,
        bananas: 1920,
        cherries: 960,
        apples: 3840
      },
      {
        month: new Date(2015, 1, 1),
        dates: 400,
        bananas: 1440,
        cherries: 960,
        apples: 1600
      },
      {
        month: new Date(2015, 2, 1),
        dates: 400,
        bananas: 960,
        cherries: 3640,
        apples: 640
      },
      {
        month: new Date(2015, 3, 1),
        dates: 400,
        bananas: 480,
        cherries: 640,
        apples: 3320
      }
    ]; */

    /*     const data = [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 }
    ]; */

    /* const colors = ["#8800cc", "#aa00ff", "#cc66ff", "#eeccff"];
    const keys = ["bananas", "dates", "cherries", "apples"];
    const svgs = [
      { onPress: () => console.log("apples") },
      { onPress: () => console.log("bananas") },
      { onPress: () => console.log("cherries") },
      { onPress: () => console.log("dates") },
      { stroke: "rgb(134, 65, 244)" }
    ]; */
    const fill = "rgb(134, 65, 244)";

    return (
      <View>
        <Text> hi </Text>
        {/*   <StackedAreaChart
          style={{ height: 200, paddingVertical: 16 }}
          data={data}
          keys={keys}
          colors={colors}
          curve={shape.curveNatural}
          showGrid={false}
          svgs={svgs}
        />
 */}

        {/*       <VictoryBar
          data={[
            { x: 1, y: 2, label: "A" },
            { x: 2, y: 4, label: "B" },
            { x: 3, y: 7, label: "C" },
            { x: 4, y: 3, label: "D" },
            { x: 5, y: 5, label: "E" }
          ]}
          events={[
            {
              target: "data",
              eventHandlers: {
                onPressIn: console.log("hi")
              }
            }
          ]}
        /> */}

        {/*     <Svg
          width={400}
          height={400}
          viewBox="0 0 400 400"
          style={{ width: "100%", height: "auto" }}
        >
          <VictoryPie
            standalone={false}
            innerRadius={75}
            labelRadius={125}
            style={{ labels: { fontSize: 20, margin: 10 }, margin: 6 }}
            data={[
              { x: 1, y: 2, label: "A" },
              { x: 2, y: 4, label: "B" },
              { x: 3, y: 7, label: "C" },
              { x: 4, y: 3, label: "D" },
              { x: 5, y: 5, label: "E" }
            ]}
            animate={{ duration: 1500 }}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPressIn: alert
                }
              }
            ]}
          />
        </Svg> */}
        <View style={{ height: 200, padding: 20 }}>
          <BarChart
            style={{ height: 200 }}
            data={datas}
            animate={true}
            animationDuration={1200}
            svg={{
              fill
            }}
            contentInset={{ top: 30, bottom: 30 }}
            clicked={this.testFunction}
          >
            <Grid />
          </BarChart>
          <XAxis
            style={{ marginTop: 1 }}
            data={this.state.data}
            scale={scale.scaleBand}
            formatLabel={(value, index) => "januar6y"}
            labelStyle={{ color: "black" }}
          />
        </View>

        <AreaChart
          style={{ height: 200 }}
          data={this.state.data}
          animate={true}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
        >
          <Grid />
        </AreaChart>
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
