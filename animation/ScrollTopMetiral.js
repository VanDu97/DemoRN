import * as React from "react";
import { Component } from "react";
import {
  Animated,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Platform,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
} from "react-native";
import AppTop from "./Top";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Easing } from "react-native-reanimated";
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    const { scrollY } = this.state;

    const viewContent = Animated.diffClamp(
      this.state.scrollY,
      0,
      60
    ).interpolate({
      inputRange: [0, Platform.OS === "android" ? 120 : 60],
      outputRange: [0, -60],
      extrapolate: "clamp",
    });

    const viewFilter = Animated.diffClamp(
      this.state.scrollY,
      0,
      60
    ).interpolate({
      inputRange: [0, 120],
      outputRange: [0, -10],
      extrapolate: "clamp",
    });
    const opacity = Animated.diffClamp(this.state.scrollY, 0, 60).interpolate({
      inputRange: [0, 60],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    const PADDING = Animated.diffClamp(this.state.scrollY, 0, 60).interpolate({
      inputRange: [0, 120],
      outputRange: [5, 0],
      extrapolate: "clamp",
    });
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff", paddingBottom: 0 }}
      >
        <StatusBar barStyle="dark-content" backgroundColor="white"  />
        <Animated.View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            opacity: opacity,
            marginVertical: isIphoneX()
              ? 5
              : Platform.OS === "ios"
              ? 10
              : PADDING,
            //top: viewFilter,
            transform: [{ translateY: viewFilter }],
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 6,
              paddingHorizontal: 30,
              paddingVertical: 5,
              backgroundColor: "#ff9900",
              marginRight: 20,
            }}
            onPress={() => alert(1)}
          >
            <Text style={{ fontSize: 16, color: "#fff", marginRight: 20 }}>
              1
            </Text>
            <FontAwesome5Pro name="angle-down" color="#fff" size={26} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 6,
              paddingHorizontal: 30,
              paddingVertical: 5,
              backgroundColor: "#ff9900",
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff", marginRight: 20 }}>
              1
            </Text>
            <FontAwesome5Pro name="angle-down" color="#fff" size={26} />
          </View>
        </Animated.View>
        <Animated.View
          style={{
            //marginTop: Platform.OS === "android" ? 80 : isIphoneX() ? 100 : 85,
            flex: 1,
            //marginTop: viewContent,
            transform: [{ translateY: viewContent }],
          }}
        >
          <AppTop scrollY={this.state.scrollY} />
        </Animated.View>
      </SafeAreaView>
    );
  }
}
