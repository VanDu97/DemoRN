import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default class TransformAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }
  startAnimation = () => {
    if (this.state.animation == 1) {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    }
  };
  render() {
    const { animation } = this.state;

    const backGround = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["#38C860", "#141C3A"],
    });
    const backGroundColor = {
      backgroundColor: backGround,
    };
    const colorText = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["#fff", "#38C860"],
    });
    const textColor = {
      color: colorText,
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={this.startAnimation}>
          <Animated.View style={[styles.view, backGroundColor]}>
            <Animated.Text style={[textColor, styles.text]}>
              Du Cena
            </Animated.Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    borderRadius: 6,
    borderWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
