import React, { Component } from "react";
import { View, Image, Dimensions, StatusBar } from "react-native";

export default class SizeImage extends Component {
  render() {
    return (
      <View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <Image
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
          resizeMode="cover"
          source={{
            uri:
              "https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562241-489-a--6--1568544517-width650height763.jpg",
          }}
        />
      </View>
    );
  }
}
