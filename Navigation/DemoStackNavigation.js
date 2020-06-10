import React, { Component } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  createCollapsibleStack,
  // disableExpoTranslucentStatusBar,
} from "react-navigation-collapsible";
import Home from "./Home";
import ScreenOne from "./ScreenOne";
import Icon from "react-native-vector-icons/AntDesign";

const Stack = createStackNavigator();
class HeaderCustom extends Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="left" size={30} color="#fff" style={{ marginLeft: 5 }} />
      </TouchableOpacity>
    );
  }
}
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
            headerBackTitle: "",
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ScreenOne"
            component={ScreenOne}
            options={({ navigation, route }) => ({
              transitionSpec: {
                open: config,
                close: config,
              },
              headerTransparent: true,
              headerTitle: null,
              headerTintColor: "#fff",

              //headerLeft: (props) => <HeaderCustom navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
