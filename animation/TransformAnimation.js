import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Easing,
} from "react-native";

export default class TransformAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }
  startAnimation = () => {
    Animated.spring(this.state.animation, {
      friction: 10,
     // speed: 4,
      tension: 160,
      toValue: 1,
      useNativeDriver: false,
    }).start(() => {
      console.log("this", this.state.animation);
    });
  };
  render() {
    const { animation } = this.state;
    const widthInteralte = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 200],
      //easing: Easing.step0,
      //easing: Easing.step1,
      //easing: Easing.linear,
      //easing: Easing.back(6),
    });
    const heightInteralte = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 200],
      //easing: Easing.step0,
      //easing: Easing.step1,
      //easing: Easing.linear,
      //easing: Easing.in,
      // easing: Easing.back(6),
    });
    const transform = {
      width: widthInteralte,
      height: heightInteralte,
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Animated.View style={[styles.view, transform]}>
          <Animated.Text style={[styles.text]}>Du Cena</Animated.Text>
        </Animated.View>
        <TouchableOpacity
          onPress={this.startAnimation}
          style={{
            marginTop: 40,
            backgroundColor: "#DDD",
            borderRadius: 6,
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <Text>Press Me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    borderRadius: 6,
    borderWidth: 1,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
