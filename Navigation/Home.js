import React, { Component } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("ScreenOne");
          }}
          style={{
            backgroundColor: "green",
            paddingVertical: 15,
            width: Dimensions.get("window").width * 0.95,
            borderRadius: 6,
            justifyContent: "center",
          }}
        >
          <Text
            style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
          >
            Touch Next Screen
          </Text>
        </TouchableOpacity>
        <Icon
          raised
          name="heartbeat"
          type="font-awesome"
          color="#f50"
          onPress={() => console.log("hello")}
        />
      </View>
    );
  }
}
