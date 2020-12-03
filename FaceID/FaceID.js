import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import TouchID from "react-native-touch-id";
import { TouchableHighlight } from "react-native-gesture-handler";
import { AlertIOS } from "react-native";
import FingerprintScanner from "react-native-fingerprint-scanner";
const optionalConfigObject = {
  title: "Authentication Required", // Android
  imageColor: "#e00606", // Android
  imageErrorColor: "#ff0000", // Android
  sensorDescription: "Touch sensor", // Android
  sensorErrorDescription: "Failed", // Android
  cancelText: "Cancel", // Android
  fallbackLabel: "", // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};
// const optionalConfigObject = {
//   unifiedErrors: false, // use unified error messages (default false)
//   fallbackLabel: "Show passcode",
//   passcodeFallback: true, // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
// };
export default class FaceID extends Component {
  _pressHandler() {
    TouchID.isSupported(optionalConfigObject)
      .then((biometryType) => {
        console.log("biometryType", biometryType);
        // Success code
        if (biometryType === "FaceID") {
          console.log("FaceID is supported.");
        } else {
          console.log("TouchID is supported.");
        }
      })
      .catch((error) => {
        // Failure code
        console.log(error);
      });
    TouchID.authenticate(
      "to demo this react-native component",
      optionalConfigObject
    )
      .then((success) => {
        console.log("Hello", success);
      })
      .catch((error) => {
        console.log("error 1", error);
        if (error.name == "LAErrorUserFallback") {
          TouchID.authenticate(
            "to demo this react-native component",
            optionalConfigObject
          )
            .then((success) => {
              console.log("Hello", success);
            })
            .catch((error) => {
              console.log("error 1", error);
              if (error.name == "LAErrorUserFallback") {
                alert(error.message);
              }
            });
        }
      });

    // TouchID.isSupported(optionalConfigObject)
    //   .then((biometryType) => {
    //     console.log("biometryType", biometryType);
    //     // Success code
    //     if (biometryType === "FaceID") {
    //       console.log("FaceID is supported.");
    //     } else {
    //       console.log("TouchID is supported.");
    //     }
    //   })
    //   .catch((error) => {
    //     // Failure code
    //     console.log(error);
    //   });
  }

  componentDidMount() {
    FingerprintScanner.isSensorAvailable()
      .then((biometryType) => console.log("b", biometryType))
      .catch((error) => console.log("error", error));
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log("props", props);
  //     console.log("state", state);
  //   }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            this._pressHandler();
            // FingerprintScanner.authenticate({
            //   description:
            //     "Scan your fingerprint on the device scanner to continue",
            // })
            //   .then((event) => {
            //     console.log(event);
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   });
          }}
        >
          <Text>Authenticate with Touch ID</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
