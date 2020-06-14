import React, { Component } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

export default class PanGesture extends Component {
  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
    },
    onPanResponderMove: Animated.event(
      [null, { dx: this.pan.x, dy: this.pan.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      console.log("Index", this.pan);
      this.pan.flattenOffset();
    },

    onMoveShouldSetPanResponderCapture: (e, gestureState) => true,
    onStartShouldSetPanResponder: (e, gestureState) => true,
    onStartShouldSetPanResponderCapture: (e, gestureState) => true,
    onPanResponderReject: (e, gestureState) => {},
    onPanResponderStart: (e, gestureState) => {},
    onPanResponderEnd: (e, gestureState) => {},

    onPanResponderTerminate: (e, gestureState) => {},
    onPanResponderTerminationRequest: (e, gestureState) => {},
    onShouldBlockNativeResponder: (e, gestureState) => {},
  });

  render() {
    console.log("Hello", this.pan);
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Animated.View
          style={{
            transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }],
          }}
          {...this.panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});
