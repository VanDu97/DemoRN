import React, { Component } from "react";
import * as Progress from "react-native-progress";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Surface, Shape } from "@react-native-community/art";
var time;
export default class ProgressExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }
  componentDidMount() {
    this.handleTime();
  }
  componentWillUnmount() {
    clearInterval(time);
  }

  handleTime = () => {
    time = setInterval(() => {
      //alert(1);

      this.setState({ offset: this.state.offset + 0.1 });
    }, 1000);
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              offset: this.state.offset + 0.1,
            });
          }}
        >
          <Text>Next</Text>
        </TouchableOpacity>
        <Progress.Bar
          color={"red"}
          progress={this.state.offset}
          width={Dimensions.get("window").width * 0.95}
          height={25}
          borderRadius={4}
        />
        <Progress.Pie progress={0.6} width={300} />
        <Progress.Circle progress={0.5} width={300} />
        <Progress.CircleSnail color={["red", "green", "blue"]} />
      </View>
    );
  }
}
