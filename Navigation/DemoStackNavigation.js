import React, { Component } from "react";
import { View, Text, TouchableOpacity, Animated, Platform } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  createCollapsibleStack,
  // disableExpoTranslucentStatusBar,
} from "react-navigation-collapsible";
import Home from "./Home";
import ScreenOne from "./ScreenOne";
import Icon from "react-native-vector-icons/AntDesign";
import { SliderBox } from "react-native-image-slider-box";
import BotttomHide from "../Performance/BotttomHide";
import TopAnimationHorizatol from "../Performance/TopAnimationHorizatol";
//const Stack = createStackNavigator();
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import {
  enableScreens,
  ScreenContainer,
  ScreenStackHeaderConfig,
} from "react-native-screens";
import DemoTest from "./DemoTest";

enableScreens();
const Stack = createNativeStackNavigator();

export default class DemoStackNavigation extends Component {
  constructor(props) {
    super(props);
    this._animation = new Animated.Value(0);
  }
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
          headerMode="screen"
          screenOptions={{
            headerTitleAlign: "center",
            headerTranslucent: true,
          }}
        >
          <Stack.Screen
            name="Home"
            // component={TopAnimationHorizatol}
            component={Home}
            options={({ navigation, route }) => ({
              headerTransparent: true,
              headerTitle: null,
              headerTintColor: "#fff",
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="DemoTest"
            component={DemoTest}
            options={({ navigation, route }) => ({
              transitionSpec: {
                open: config,
                close: config,
              },
              headerTransparent: true,
              headerTitle: null,
              headerTintColor: "#fff",
              stackPresentation: Platform.OS === "ios" ? "modal" : "push",
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
