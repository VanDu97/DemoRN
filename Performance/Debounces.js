import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";

export default class Debounces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
    this.status = false;
  }
  handleChange = _.debounce((text) => {
    this.setState({
      name: text,
    });
  }, 600);

  handleChangePassword = _.debounce((text) => {
    this.setState({
      password: text,
    });
  }, 600);
  render() {
    const { name, password } = this.state;
    console.log("state", name);
    console.log("state password", password, this.status);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          //value={name}
          style={styles.textInput}
          placeholderTextColor="#000"
          placeholder="User name"
          onChangeText={this.handleChange}
        />
        <TextInput
          //value={password}
          style={styles.textInput}
          placeholderTextColor="#000"
          placeholder="Password"
          onChangeText={this.handleChangePassword}
        />
        <TouchableOpacity style={styles.touch} onPress={() => null}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#000",
    width: Dimensions.get("window").width * 0.96,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  touch: {
    paddingVertical: 15,
    width: Dimensions.get("window").width * 0.96,
    backgroundColor: "red",
    marginVertical: 15,
    borderRadius: 6,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
