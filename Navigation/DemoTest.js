import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { StatusBar } from "react-native";

export default class DemoTest extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Text>Hello</Text>
      </View>
    );
  }
}
