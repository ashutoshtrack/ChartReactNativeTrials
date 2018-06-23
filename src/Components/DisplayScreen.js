import React, { Component } from "react";
import { View, ScrollView, YellowBox } from "react-native";
import Svg, { Circle, G, Rect, Text, Path } from "react-native-svg";
import {
  StackedAreaChart,
  BarChart,
  LineChart,
  Grid,
  AreaChart,
  XAxis,
  YAxis
} from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const ToolTipDummydata = [
  50,
  10,
  40,
  95,
  -4,
  -24,
  85,
  91,
  35,
  53,
  -53,
  24,
  50,
  -20,
  -80
];

class DisplayScreen extends Component {
  render() {
    const { navigation } = this.props;

    //Passed from HomeScreen
    const PassingData = navigation.getParam("PassingData", "ccc");
    const datam = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80
    ];

    //Tooltip Trials
    const Decorator = ({ x, y, data }) => {
      console.log(x, y, data, "sfr");
      return data.map((value, index) => {
        console.log(value, "Aas");
        return (
          <Circle
            onPress={() => alert(value.value)}
            key={index}
            cx={x(index)}
            cy={y(value.value)}
            r={4}
            stroke={"rgb(134, 65, 244)"}
            fill={"white"}
          />
        );
      });
    };
    const Line = ({ line }) => (
      <Path d={line} stroke={"rgba(134, 65, 244)"} fill={"none"} />
    );

    const Tooltip = ({ x, y }) => {
      console.log(x, y, "X AND Y");

      return (
        <G
          x={x(5) - 75 / 2}
          key={"tooltip"}
          onPress={() => alert("tooltip clicked")}
        >
          <G y={50}>
            <Rect
              height={40}
              width={75}
              stroke={"grey"}
              fill={"white"}
              ry={10}
              rx={10}
            />
            <Text
              x={75 / 2}
              dy={20}
              alignmentBaseline={"middle"}
              textAnchor={"middle"}
              stroke={"rgb(134, 65, 244)"}
            >
              {240}
            </Text>
          </G>
          <G x={75 / 2}>
            <Line y1={50 + 40} y2={y(-24)} stroke={"grey"} strokeWidth={2} />
            <Circle
              cy={y(-24)}
              r={6}
              stroke={"rgb(134, 65, 244)"}
              strokeWidth={2}
              fill={"white"}
            />
          </G>
        </G>
      );
    };
    //TootlTip Trials end here

    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <YAxis
            data={PassingData}
            yAccessor={({ item }) => item.value}
            formatLabel={(_, index) => index}
            style={{ marginBottom: 5, margin: 5 }}
            contentInset={{ top: 30, bottom: 30 }}
            svg={{ fontSize: 10, fill: "grey" }}
          />
          <ScrollView horizontal={true}>
            <View style={{ flex: 1, width: 400 }}>
              <AreaChart
                style={{ height: 200, width: "100%" }}
                data={PassingData}
                yAccessor={({ item }) => item.value}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: "rgba(134, 65, 244, 0.5)" }}
              >
                <Grid />
              </AreaChart>
              <XAxis
                data={PassingData}
                yAccessor={({ index }) => index}
                scale={scale.scaleBand}
                contentInset={{ top: 10, bottom: 10 }}
                style={{ margin: 7 }}
                spacing={0.2}
                formatLabel={(_, index) => PassingData[index].label}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default DisplayScreen;

/*

 <View>
          <LineChart
            style={{ height: 200 }}
            data={PassingData}
            yAccessor={({ item }) => item.value}
            svg={{
              stroke: "rgb(134, 65, 244)",
              strokeWidth: 2
            }}
            contentInset={{ top: 20, bottom: 30 }}
          >
            <Grid />
            <Decorator />
          </LineChart>
        </View>



*/
