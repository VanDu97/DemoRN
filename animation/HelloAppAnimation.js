import React, { Component } from "react";
import { View, Text, ImageBackground, Dimensions, Image } from "react-native";
const { width, height } = Dimensions.get("window");

export default class HelloAppAnimation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          justifyContent: "center",
        }}
        source={{
          uri:
            "https://unku.store/wp-content/uploads/2019/01/basket-beautiful-beauty-opti.jpg",
        }}
      >
        <Image
          style={{
            width: Dimensions.get("window").width * 0.6,
            height: Dimensions.get("window").height * 0.2,
          }}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
          }}
        />
        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
          Welcome To Home Screen
        </Text>
      </ImageBackground>
    );
  }
}
