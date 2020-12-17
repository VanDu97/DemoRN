import React, { Component } from "react";
import PropTypes from "prop-types";
import { SafeAreaView, Text, View } from "react-native";

import TabTop from "./TabTop";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={TabTop} />
        <Tab.Screen name="Tab2" component={TabTop} />
        <Tab.Screen name="Tab3" component={TabTop} />
        <Tab.Screen name="Tab4" component={TabTop} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

class ScrollTop extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Hello</Text>
      </SafeAreaView>
    );
  }
}

export default ScrollTop;
