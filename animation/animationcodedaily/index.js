import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

export default class MasterAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1),
    };
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };
  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const animationStyles = {
      //opacity: this.state.animation,
      transform: [
        {
          translateY: this.state.animation,
        },
      ],
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animationStyles]} />
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
