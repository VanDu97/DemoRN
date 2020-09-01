import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import { PureComponent } from "react";
export default class Item extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    //do stuff here
    console.log("props", props);
    console.log("state", state);
  }

  render() {
    const { item, handleData } = this.props;
    console.log("index", item.id);
    return (
      <TouchableOpacity
        onPress={handleData}
        style={{
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
        }}
      >
        <Text>{item.title} </Text>
      </TouchableOpacity>
    );
  }
}
