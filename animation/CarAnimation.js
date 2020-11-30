import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
export default class CarAnimation extends Component {
  render() {
    return (
      <View style={{}}>
        <View
          style={{
            backgroundColor: "#ff9933",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5Pro name="arrow-left" color="#fff" size={20} />
              <Text>Di chuyển sân bay</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5Pro name="shopping-cart" color="#fff" size={20} />
              <FontAwesome5Pro name="ellipsis-v-alt" color="#fff" size={20} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              width: "95%",
              alignSelf: "center",
              borderRadius: 6,
              paddingHorizontal: 15,
              paddingVertical: 15,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "green",
                  marginRight: 20,
                }}
              />
              <Text>Air Plan</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "blue",
                  marginRight: 20,
                }}
              />
              <Text>Air Plan</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
