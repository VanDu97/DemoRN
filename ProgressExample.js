import React, { Component } from "react";
import * as Progress from "react-native-progress";
import { View, Text, Dimensions } from "react-native";
import { Surface, Shape } from "@react-native-community/art";
export default class ProgressExample extends Component {
  constructor(props) {
    super(props);
    this.offset = 0;
    this.time;
  }
  componentDidMount() {
    this.time = setTimeout(() => {
      this.offset = this.offset + 0.5;
    }, 1000);
  }
  componentWillUnmount() {
    //this.time.clearTimeout();
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello</Text>
        <Progress.Bar
          progress={this.offset}
          width={Dimensions.get("window").width * 0.95}
          height={25}
          borderRadius={4}
          animationType={"decay"}
        />
        <Progress.Pie progress={0.6} width={300} />
        <Progress.Circle progress={0.5} width={300} />
        <Progress.CircleSnail color={["red", "green", "blue"]} />
      </View>
    );
  }
}
