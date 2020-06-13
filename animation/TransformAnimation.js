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
      toValue: 4,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      console.log("this", this.state.animation);
    });
  };
  render() {
    const { animation } = this.state;
    const scale = animation.interpolate({
      inputRange: [0, 4],
      outputRange: [1, 4],
      extrapolate: "clamp",
    });
    console.log(this.state.animation);
    // const scaleX = animation.interpolate({
    //   inputRange: [0, 3],
    //   outputRange: [1, 4],
    // });

    // const scaleY = animation.interpolate({
    //   inputRange: [0, 3],
    //   outputRange: [1, 4],
    // });
    //alert(JSON.stringify(scale));
    console.log(scale);
    const transform = {
      transform: [
        {
          scale: scale,
          //   scaleY: scaleY,
          //   scaleX: scaleX,
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
