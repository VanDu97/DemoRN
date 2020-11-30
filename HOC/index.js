import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, Dimensions } from "react-native";
import HOC from "./HocCus";
import ViewComp from "./ViewComp";
import { Icon } from "native-base";
import _ from "lodash";
import { Button } from "react-native-elements";
// import MessageQueue from "react-native/Libraries/BatchedBridge/MessageQueue";

// MessageQueue.spy(true);
const HOCCompoent = HOC(ViewComp);
export default class LearnHOC extends Component {
  state = {
    valueText: "",
  };
  render() {
    console.log("text", this.state.valueText);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Solid Button" />

        <Button title="Outline button" type="outline" />

        <Button title="Clear button" type="clear" />

        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Button with icon component"
        />

        <Button
          icon={{
            name: "arrow-right",
            size: 15,
            color: "white",
          }}
          title="Button with icon object"
        />

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
        <TextInput
          style={{
            borderWidth: 1,
            width: Dimensions.get("window").width * 0.96,
            borderRadius: 6,
            borderColor: "#ddd",
            paddingVertical: 15,
            paddingHorizontal: 15,
            marginTop: 15,
          }}
          placeholder="Text..."
          //value={this.state.valueText}
          onChangeText={(text) => {
            _.debounce(() => this.setState({ valueText: text }), 1000)();
          }}
        />
      </View>
    );
  }
}
