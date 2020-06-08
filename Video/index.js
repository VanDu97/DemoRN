import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import Video from "react-native-video";

export default class DemoVideo extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Video
          muted={true}
          repeat={true}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height * 0.6,
          }}
          source={require("./Gopanda.mp4")}
        />
      </View>
    );
  }
}
