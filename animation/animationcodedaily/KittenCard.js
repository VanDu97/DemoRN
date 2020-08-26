import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList, PanResponder } from "react-native";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";

/**
stateID - ID of the gestureState- persisted as long as there at least one touch on screen
moveX - the latest screen coordinates of the recently-moved touch
moveY - the latest screen coordinates of the recently-moved touch
x0 - the screen coordinates of the responder grant
y0 - the screen coordinates of the responder grant
dx - accumulated distance of the gesture since the touch started
dy - accumulated distance of the gesture since the touch started
vx - current velocity of the gesture
vy - current velocity of the gesture
numberActiveTouches - Number of touches currently on screen
 */

const SWIPE_THRESHOLD = 120;
const HEIGHT = Dimensions.get("window").height;

function clamp(value, min, max) {
  return min < max
    ? value < min
      ? min
      : value > max
      ? max
      : value
    : value < max
    ? max
    : value > min
    ? min
    : value;
}
export default class KittenCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { cat: require("../../assets/cat2.jpg"), id: 1, text: "Sweet kitty" },
        { cat: require("../../assets/cat3.jpg"), id: 2, text: "Sugar cute" },
        { cat: require("../../assets/cat4.jpg"), id: 3, text: "Kitty meo meo" },
        { cat: require("../../assets/cat2.jpg"), id: 4, text: "Sweet kitty" },
        { cat: require("../../assets/cat3.jpg"), id: 5, text: "Sugar cute" },
        { cat: require("../../assets/cat4.jpg"), id: 6, text: "Kitty meo meo" },
      ],
      animation: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      next: new Animated.Value(0.9),
    };
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.state.animation.x,
            dy: this.state.animation.y,
          },
        ],
        {
          useNativeDriver: false,
        }
      ),

      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (e, gestureState) => {
        let velocity;
        if (gestureState.vx >= 0) {
          velocity = clamp(gestureState.vx, 3, 5);
        } else if (gestureState.vx < 0) {
          velocity = clamp(gestureState.vx, 3, 5) * -1;
        }

        if (Math.abs(gestureState.dx) > SWIPE_THRESHOLD) {
          Animated.decay(this.state.animation, {
            velocity: { x: velocity, y: gestureState.vy },
            deceleration: 0.98,
            useNativeDriver: false,
          }).start(this.transitionNext);
        } else {
          Animated.spring(this.state.animation, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: false,
          }).start();
        }
      },
    });
  }

  transitionNext = () => {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.spring(this.state.next, {
        toValue: 1,
        friction: 4,
        useNativeDriver: false,
      }),
    ]).start(() => {
      this.setState(
        {
          items: this.state.items.slice(1),
        },
        () => {
          this.state.animation.setValue({ x: 0, y: 0 });
          this.state.opacity.setValue(1);
          this.state.next.setValue(0.9);
        }
      );
    });
  };
  render() {
    const { animation } = this.state;
    const rotate = animation.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ["-30deg", "0deg", "30deg"],
      extrapolate: "clamp",
    });
    const opacity = animation.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: [0.5, 1, 0.5],
    });

    const animatedCardStyle = {
      transform: [
        {
          rotate,
        },
        ...this.state.animation.getTranslateTransform(),
      ],
      opacity: this.state.opacity,
    };
    const animtedImageStyle = {
      opacity,
    };

    const rotateCardNope = animation.x.interpolate({
      inputRange: [-150, 0],
      outputRange: [1.5, 1],
      extrapolate: "clamp",
    });
    const rotateCardYep = animation.x.interpolate({
      inputRange: [0, 150],
      outputRange: [1, 0.5],
    });

    const opacityNope = animation.x.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    const nopeStyle = {
      transform: [
        {
          rotate: "30deg",
        },
        {
          scale: rotateCardNope,
        },
      ],
      opacity: opacityNope,
    };

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {this.state.items
            .slice(0, 2)
            .reverse()
            .map(({ cat, id, text }, index, items) => {
              const isLastItem = index === items.length - 1;
              const isSecondItem = index === items.length - 2;
              const cardStyle = isLastItem ? animatedCardStyle : undefined;
              const imageStyle = isLastItem ? animtedImageStyle : undefined;
              const panresponder = isLastItem
                ? this._panResponder.panHandlers
                : {};
              const nextCard = isSecondItem
                ? {
                    transform: [
                      {
                        scale: this.state.next,
                      },
                    ],
                  }
                : undefined;
              return (
                <Animated.View
                  {...panresponder}
                  key={id}
                  style={[styles.viewItem, cardStyle, nextCard]}
                >
                  <Animated.Image
                    source={cat}
                    style={[styles.image, imageStyle]}
                    resizeMode="cover"
                  />
                  <View style={[styles.text]}>
                    <Text>{text}</Text>
                  </View>

                  {isLastItem && (
                    <View style={[styles.viewNope, nopeStyle]}>
                      <Text style={styles.textNope}>Nope!</Text>
                    </View>
                  )}
                  {isLastItem && (
                    <View style={[styles.viewYep]}>
                      <Text style={styles.textYep}>Yep!</Text>
                    </View>
                  )}
                </Animated.View>
              );
            })}
        </View>
        <View style={styles.buttonBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewItem: {
    width: 300,
    height: 300,
    alignSelf: "center",
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: "#000",
    position: "absolute",
    backgroundColor: "#fff",
  },
  image: {
    width: null,
    height: null,
    flex: 4,
  },
  text: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  viewNope: {
    position: "absolute",
    top: 15,
    left: 15,
    borderWidth: 1,
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  textNope: {
    color: "red",
    fontSize: 16,
  },
  viewYep: {
    position: "absolute",
    top: 15,
    right: 15,
    borderWidth: 1,
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  textYep: {
    color: "green",
    fontSize: 16,
  },
});
