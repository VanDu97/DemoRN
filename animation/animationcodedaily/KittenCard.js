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
const SWIPE_THRESHOLD = 120;
const HEIGHT = Dimensions.get("window").height;
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
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          ,
          {
            dx: this.state.animation.x,
            dy: this.state.animation.y,
          },
        ],
        {
          useNativeDriver: false,
        }
      ),
      onPanResponderRelease: (
        e,
        { moveX, moveY, x0, y0, dx, dy, vx, vy, numberActiveTouches }
      ) => {
        let velocity;
        console.log(
          "Item",
          moveX,
          moveY,
          x0,
          y0,
          dx,
          dy,
          vx,
          vy,
          numberActiveTouches
        );
        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(Math.abs(vx), 3, 5) * -1;
        }

        if (Math.abs(dx) > SWIPE_THRESHOLD) {
          Animated.decay(this.state.animation, {
            velocity: { x: velocity, y: vy },
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
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.spring(this.state.next, {
        toValue: 1,
        friction: 4,
        useNativeDriver: false,
      }),
    ]).start(() => {
      this.setState(
        (state) => {
          return {
            items: state.items.slice(1),
          };
        },
        () => {
          this.state.next.setValue(0.9);
          this.state.opacity.setValue(1);
          this.state.animation.setValue({ x: 0, y: 0 });
        }
      );
    });
  };
  handleNo = () => {
    Animated.timing(this.state.animation.x, {
      toValue: -SWIPE_THRESHOLD,
      useNativeDriver: false,
    }).start(this.transitionNext);
  };
  handleYes = () => {
    Animated.timing(this.state.animation.x, {
      toValue: SWIPE_THRESHOLD,
      useNativeDriver: false,
    }).start(this.transitionNext);
  };

  render() {
    const { animation } = this.state;

    const rotate = animation.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ["-30deg", "0deg", "30deg"],
      extrapolate: "clamp",
      useNativeDriver: false,
    });

    const opacity = animation.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: [0.5, 1, 0.5],
      useNativeDriver: false,
    });

    const yesOpacity = animation.x.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
      useNativeDriver: false,
    });
    const yesScale = animation.x.interpolate({
      inputRange: [0, 150],
      outputRange: [0.5, 1],
      extrapolate: "clamp",
      useNativeDriver: false,
    });
    const animatedYupStyles = {
      transform: [{ scale: yesScale }, { rotate: "-30deg" }],
      opacity: yesOpacity,
    };

    const noOpacity = animation.x.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      useNativeDriver: false,
    });
    const noScale = animation.x.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0.5],
      extrapolate: "clamp",
      useNativeDriver: false,
    });
    const animatedNopeStyles = {
      transform: [{ scale: noScale }, { rotate: "30deg" }],
      opacity: noOpacity,
    };

    const animatedCardStyles = {
      transform: [{ rotate }, ...this.state.animation.getTranslateTransform()],
      opacity: this.state.opacity,
    };

    const animatedImageStyles = {
      opacity,
    };

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {this.state.items
            .slice(0, 2)
            .reverse()
            .map(({ cat, id, text }, index, items) => {
              const isLastItem = index === items.length - 1;
              const isSecondToLast = index === items.length - 2;

              const panHandlers = isLastItem
                ? this._panResponder.panHandlers
                : {};
              const cardStyle = isLastItem ? animatedCardStyles : undefined;
              const imageStyle = isLastItem ? animatedImageStyles : undefined;
              const nextStyle = isSecondToLast
                ? { transform: [{ scale: this.state.next }] }
                : undefined;

              return (
                <Animated.View
                  {...panHandlers}
                  style={[styles.card, cardStyle, nextStyle]}
                  key={id}
                >
                  <Animated.Image
                    source={cat}
                    style={[styles.image, imageStyle]}
                    resizeMode="cover"
                  />
                  <View style={styles.lowerText}>
                    <Text>{text}</Text>
                  </View>

                  {isLastItem && (
                    <Animated.View style={[styles.nope, animatedNopeStyles]}>
                      <Text style={styles.nopeText}>Nope!</Text>
                    </Animated.View>
                  )}

                  {isLastItem && (
                    <Animated.View style={[styles.yup, animatedYupStyles]}>
                      <Text style={styles.yupText}>Yup!</Text>
                    </Animated.View>
                  )}
                </Animated.View>
              );
            })}
        </View>
        <View style={styles.buttonBar}>
          <TouchableOpacity
            onPress={this.handleNo}
            style={[styles.button, styles.nopeButton]}
          >
            <Text style={styles.nopeText}>NO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.handleYes}
            style={[styles.button, styles.yupButton]}
          >
            <Text style={styles.yupText}>YES</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 5,
  },
  yupButton: {
    shadowColor: "green",
  },
  nopeButton: {
    shadowColor: "red",
  },

  card: {
    width: 300,
    height: 300,
    position: "absolute",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  lowerText: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 5,
  },
  image: {
    width: null,
    height: null,
    borderRadius: 2,
    flex: 3,
  },
  yup: {
    borderColor: "green",
    borderWidth: 2,
    position: "absolute",
    padding: 20,
    borderRadius: 5,
    top: 20,
    left: 20,
    backgroundColor: "#FFF",
  },
  yupText: {
    fontSize: 16,
    color: "green",
  },
  nope: {
    borderColor: "red",
    borderWidth: 2,
    position: "absolute",
    padding: 20,
    borderRadius: 5,
    right: 20,
    top: 20,
    backgroundColor: "#FFF",
  },
  nopeText: {
    fontSize: 16,
    color: "red",
  },
});
