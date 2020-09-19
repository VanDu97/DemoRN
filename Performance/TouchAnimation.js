import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Animated,
  PanResponder,
} from "react-native";
import { Icon } from "react-native-elements";
import { data } from "./data";

export default class TouchAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.ValueXY({ x: 0, y: 0 }),
      next: new Animated.Value(0.9),
      opcity: new Animated.Value(1),
      data: data,
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: Animated.event(
        [null, { dx: this.state.scrollY.x, dy: this.state.scrollY.y }],
        {
          useNativeDriver: false,
        }
      ),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        console.log("ge", gestureState);
        if (Math.abs(gestureState.dx) > 150) {
          Animated.decay(this.state.scrollY, {
            velocity: { x: gestureState.vx, y: gestureState.vy },
            deceleration: 0.98,
            useNativeDriver: false,
          }).start(this.handleAnimationCard);
        }
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
  handleAnimationCard = () => {
    Animated.parallel([
      Animated.timing(this.state.opcity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(),
      Animated.spring(this.state.next, {
        toValue: 1,
        friction: 4,
        useNativeDriver: false,
      }).start(),
    ]).start(() => {
      this.setState({ data: this.state.data.slice(1) }, () => {
        this.state.scrollY.setValue({
          x: 0,
          y: 0,
        });
        this.state.next.setValue(0.9);
        this.state.next.setValue(0.9);
      });
    });
  };
  render() {
    const { scrollY, data } = this.state;

    const RotateView = scrollY.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ["-45deg", "0deg", "45deg"],
      extrapolate: "clamp",
    });
    const opacity = scrollY.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: [0.5, 1, 0.5],
      extrapolate: "clamp",
    });
    const animationView = {
      transform: [
        {
          rotate: RotateView,
        },
        // {
        //   translateX: this.state.scrollY.x,
        // },
        // {
        //   translateY: this.state.scrollY.y,
        // },
        ...this.state.scrollY.getTranslateTransform(),
      ],
      opacity,
    };
    const opacityYes = scrollY.x.interpolate({
      inputRange: [0, 150],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    const rotateYes = scrollY.x.interpolate({
      inputRange: [0, 150],
      outputRange: [0.5, 1],
      extrapolate: "clamp",
    });
    const yesCard = {
      transform: [
        {
          rotate: "-30deg",
        },
        {
          scale: rotateYes,
        },
      ],
      opacity: opacityYes,
    };
    const imageStyle = scrollY.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: [0, 1, 0],
      extrapolate: "clamp",
    });
    const opacityNo = scrollY.x.interpolate({
      inputRange: [-130, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    const rotateNo = scrollY.x.interpolate({
      inputRange: [-130, 0],
      outputRange: [1, 0.5],
      extrapolate: "clamp",
    });
    const noCard = {
      transform: [
        {
          rotate: "30deg",
        },
        {
          scale: rotateNo,
        },
      ],
      opacity: opacityNo,
    };
    //{...panResponders}
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {data
            .slice(0, 2)
            .reverse()
            .map(({ booked, src, comment, title, star }, index, data) => {
              const firstItem = index === data.length - 2;
              const lastItem = index === data.length - 1;
              const animationCard = lastItem ? animationView : undefined;
              const imgaeCard = lastItem
                ? {
                    opacity: imageStyle,
                  }
                : undefined;
              const nextCard = firstItem
                ? {
                    transform: [
                      {
                        scale: this.state.next,
                      },
                    ],
                  }
                : undefined;

              const pans = lastItem ? this.panResponder.panHandlers : {};
              return (
                <Animated.View
                  style={[styles.view_touch, animationCard, nextCard]}
                  key={index}
                  {...pans}
                >
                  {lastItem && (
                    <Animated.View style={[styles.view_choose, yesCard]}>
                      <Text style={styles.textCommon}>Chọn</Text>
                    </Animated.View>
                  )}
                  {lastItem && (
                    <Animated.View style={[styles.view_reject, noCard]}>
                      <Text style={styles.textCommon}>Bỏ qua</Text>
                    </Animated.View>
                  )}
                  <Animated.Image
                    source={{ uri: src }}
                    resizeMode="cover"
                    style={[styles.image, imgaeCard]}
                  />
                  <View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
                    <Text style={styles.text_one}>{title}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <Text style={styles.rating}>{star} </Text>
                      <Icon
                        name="star"
                        type="font-awesome"
                        color="#FFA628"
                        size={24}
                      />
                    </View>
                    <View style={styles.view_footer}>
                      <Text style={styles.textCount}>{booked} lần gọi</Text>
                      <Text style={styles.text_review}>
                        {comment.length} đánh giá
                      </Text>
                    </View>
                  </View>
                </Animated.View>
              );
            })}
        </View>
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
  touch_one: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    // backgroundColor: "#FF5733",
    backgroundColor: "#fff",
    width: Dimensions.get("window").width * 0.9,
    height: 530,
    marginBottom: 20,
    overflow: "hidden",
  },
  text_one: {
    color: "#000",
    //textAlign: "center",
    fontWeight: "bold",
  },
  view_touch: {
    width: Dimensions.get("window").width * 0.9,
    height: 530,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    backgroundColor: "#fff",
    position: "absolute",
  },
  view_choose: {
    position: "absolute",
    left: 20,
    top: 20,
    zIndex: 1,
    backgroundColor: "green",
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  view_reject: {
    position: "absolute",
    right: 20,
    top: 20,
    zIndex: 1,
    backgroundColor: "red",
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textCommon: {
    color: "#fff",
    //fontFamily: "sans-serif-medium",
  },
  textCount: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "arial",
    marginTop: 10,
  },
  text_review: {
    fontSize: 18,
    fontWeight: "500",
    //fontFamily: "sans-serif-medium",
    marginTop: 10,
  },
  view_footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  rating: {
    color: "#FFA628",
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: null,
    height: null,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    flex: 3,
  },
});
