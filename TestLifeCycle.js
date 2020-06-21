import React, { Component, PureComponent } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import TextInputComponents from "./component/TextInputComponent/index";
export default class TestLifeCycle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    //return { count: 4 };
    return null;
  }
  //   shouldComponentUpdate() {
  //     return true;
  //   }
  getSnapshotBeforeUpdate(props, state) {
    console.log("Befor", props, state);
    return 10;
  }
  componentDidUpdate(props, state, snapshot) {
    console.log("current", this.state.count);
    console.log("Did", props, state);
    console.log("snapshot", snapshot);
  }

  render() {
    const { count } = this.state;
    console.log(count);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{count} </Text>

        <TouchableOpacity
          onPress={() => this.setState({ count: count + 1 })}
          style={{
            marginTop: 20,
            borderRadius: 6,
            paddingVertical: 10,
            paddingHorizontal: 40,
            backgroundColor: "green",
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 15 }}>Touch</Text>
        </TouchableOpacity>
        <TextInputComponents
          style={{
            width: Dimensions.get("window").width * 0.9,
            borderWidth: 1,
            borderColor: "red",
            borderRadius: 6,
            //paddingVertical: 10,
            paddingHorizontal: 10,
            marginTop: 15,
          }}
          placeholder="Du Cena"
          optionalSymbol="+"
          node="10"
          email={"Nguyenvandugamil.com"}
          element={
            <View>
              <Text>Hello element</Text>
            </View>
          }
        />
      </View>
    );
  }
}
