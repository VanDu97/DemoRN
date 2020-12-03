import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import TouchID from "react-native-touch-id";
import { TouchableHighlight } from "react-native-gesture-handler";
const optionalConfigObject = {
  title: "Authentication Required", // Android
  imageColor: "#e00606", // Android
  imageErrorColor: "#ff0000", // Android
  sensorDescription: "Touch sensor", // Android
  sensorErrorDescription: "Failed", // Android
  cancelText: "Cancel", // Android
  fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

export default class FaceID extends Component {
  _pressHandler() {
    TouchID.authenticate(
      "to demo this react-native component",
      optionalConfigObject
    )
      .then((success) => {
        console.log("Hello", success);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }
  static getDerivedStateFromProps(props, state) {
    console.log("props", props);
    console.log("state", state);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={this._pressHandler}>
          <Text>Authenticate with Touch ID</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
