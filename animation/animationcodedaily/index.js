import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  Image,
  PanResponder,
} from "react-native";
import { Dimensions } from "react-native";
import { StatusBar } from "react-native";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
export default class MasterAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
    this.panresonder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) =>
        Animated.event(
          [
            {
              dx: this.state.animation,
            },
          ],
          {
            useNativeDriver: false,
          }
        ),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
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
    const heightImage = this.state.animation.interpolate({
      inputRange: [0, 200],
      outputRange: [300, 100],
      extrapolate: "extend",
    });
    console.log("Position", heightImage);
    return (
      <View style={{ flex: 1 }}>
        <Animated.Image
          style={{
            flex: 1,
            width: "100%",
            height: heightImage,
            position: "absolute",
          }}
          source={require("../../assets/cat3.jpg")}
        />
        <Animated.ScrollView
          contentContainerStyle={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.animation } } }],
            { useNativeDriver: false } // Optional async listener
          )}
        >
          <StatusBar barStyle="light-content" />
          <View style={{ marginTop: 300 }}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quas quibusdam maxime ratione eligendi ut corporis, necessitatibus
              minima soluta vel quod nisi rerum dolore ipsam ducimus maiores non
              dignissimos repudiandae!
            </Text>
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    borderRadius: 6,
  },
});
