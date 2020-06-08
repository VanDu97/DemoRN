import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Home";
import ScreenOne from "./ScreenOne";
const Stack = createStackNavigator();
export default class DemoStackNavigation extends Component {
  render() {
    const config = {
      animation: "spring",
      config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      },
    };
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Home}
          screenOptions={{
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen name="Home" component={Home} options={{}} />
          <Stack.Screen
            name="ScreenOne"
            component={ScreenOne}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
