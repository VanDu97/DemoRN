import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

export default class TransformAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      console.log("this", this.state.animation);
    });
  };
  render() {
    const { animation } = this.state;
    const scale = animation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"],
      extrapolate: "clamp",
    });
    console.log(this.state.animation);

    const transform = {
      transform: [
        {
          //translateY: scale,
          //translateX: scale,
          //rotateX: scale,
          //rotate: scale,
          rotateY: scale,
        },
      ],
    };
    const opacity = {
      opacity: this.state.animation,
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
