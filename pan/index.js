import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, PanResponder, Animated } from "react-native";
export default class DrawView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ScrollY: new Animated.ValueXY(0),
      backColor: new Animated.Value(0),
    };
    this.panRespinder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        console.log("Event", evt, gestureState);
        this.state.ScrollY.setOffset({
          x: this.state.ScrollY.x._value,
          y: this.state.ScrollY.y._value,
        });
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.state.ScrollY.x,
            dy: this.state.ScrollY.y,
          },
        ],
        {
          useNativeDriver: false,
        }
      ),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        this.state.ScrollY.flattenOffset();
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  render() {
    const pan = this.panRespinder.panHandlers;
    const back = this.state.backColor.interpolate({
      inputRange: [0, 1, 5],
      outputRange: [1, 0, 1],
    });
    console.log(this.state.ScrollY);
    return (
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Animated.View
          {...pan}
          style={{
            transform: [
              {
                translateY: this.state.ScrollY.y,
              },
              {
                translateX: this.state.ScrollY.x,
              },
            ],
            width: 30,
            height: 30,
            backgroundColor: "red",

            borderRadius: 5,
          }}
        />
      </Animated.View>
    );
  }
}
