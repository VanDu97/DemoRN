import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import Video from "react-native-video";
import VideoPlayer from "react-native-video-controls";

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
        <VideoPlayer source={require("./Gopanda.mp4")} />
      </View>
    );
  }
}
