import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import { PureComponent } from "react";
import _ from "lodash";
export default class Item extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   //do stuff here
  //   console.log("props", props);
  //   console.log("state", state);
  // }
  constructor(props) {
    super(props);
    this.state = {};
    this.status = true;
  }

  // shouldComponentUpdate(nextProps) {
  //   return !_.isEqual(nextProps, this.props);
  // }

  handleSum = () => {
    var object = { a: 1, b: 2, c: 4 };
    var other = { a: 1, b: 2, c: "4" };
    //console.log(_.isEqual(object, other));
  };
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
        {this.handleSum()}
      </TouchableOpacity>
    );
  }
}
