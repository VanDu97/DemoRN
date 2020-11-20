import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import HOC from "./HocCus";
import ViewComp from "./ViewComp";
import { Icon } from "native-base";
import MessageQueue from "react-native/Libraries/BatchedBridge/MessageQueue";
MessageQueue.spy(true);
const HOCCompoent = HOC(ViewComp);
export default class LearnHOC extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <HOCCompoent>
          <View
            style={{
              flexDirection: "row",
              borderRadius: 6,
              borderWidth: 1,
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderColor: "#fff",
              backgroundColor: "#f38333",
            }}
          >
            <Icon
              ios="ios-menu"
              android="md-menu"
              style={{ fontSize: 20, color: "#fff", marginRight: 20 }}
            />
            <Text style={{ color: "#fff", fontSize: 16 }}>
              What time is it?
            </Text>
          </View>
        </HOCCompoent>
      </View>
    );
  }
}
