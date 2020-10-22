import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { enableScreens, ScreenContainer, Screen } from "react-native-screens";
import Home from "../Navigation/Home";
enableScreens();

export default class StackAnimation extends Component {
  render() {
    return (
      <ScreenContainer>
        <Screen />
      </ScreenContainer>
    );
  }
}
