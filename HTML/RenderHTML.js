import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import HTML from "react-native-render-html";
const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <h3>At Nairobi’s central bus station, a large group of men and women carry many brightly colored yellow balloons. They offer the balloons to people travelling to work. People see the balloons and smile. Soon many more individuals are carrying yellow balloons. Some of the people holding a balloon get on the buses. Others begin walking. Slowly, the balloons spread around the city as people continue on their way to work.</h3>
    <h5>At Nairobi’s central bus station, a large group of men and women carry many brightly colored yellow balloons. They offer the balloons to people travelling to work. People see the balloons and smile. Soon many more individuals are carrying yellow balloons. Some of the people holding a balloon get on the buses. Others begin walking. Slowly, the balloons spread around the city as people continue on their way to work.</h5>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

export default class RenderHTML extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <HTML
          html={htmlContent}
          containerStyle={{
            width: Dimensions.get("window").width * 0.95,
          }}
          baseFontStyle={{
            fontSize: 15,
            textAlign: "justify",
          }}
          imagesMaxWidth={Dimensions.get("window").width}
        />
      </View>
    );
  }
}
