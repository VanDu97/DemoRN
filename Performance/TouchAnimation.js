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
  handleView = () => {};
  render() {
    const panResponders = this.panResponder.panHandlers;
    const RotateView = this.state.scrollY.y.interpolate({
      inputRange: [0, 200],
      outputRange: ["0deg", "45deg"],
      extrapolate: "clamp",
    });

    //{...panResponders}
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {data
            .slice(0, 2)
            .reverse()
            .map((item, index) => {
              const firstItem = 1;
              const lastItem = 1;
              return (
                <Animated.View
                  style={[
                    styles.view_touch,
                    {
                      transform: [
                        {
                          rotate: RotateView,
                        },
                      ],
                    },
                  ]}
                  key={index}
                  {...panResponders}
                >
                  <View style={styles.view_choose}>
                    <Text style={styles.textCommon}>Chọn</Text>
                  </View>
                  <View style={styles.view_reject}>
                    <Text style={styles.textCommon}>Bỏ qua</Text>
                  </View>
                  <Animated.Image
                    source={{ uri: item.src }}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: 400,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    }}
                  />
                  <View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
                    <Text style={styles.text_one}>{item.title}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <Text style={styles.rating}>{item.star} </Text>
                      <Icon
                        name="star"
                        type="font-awesome"
                        color="#FFA628"
                        size={24}
                      />
                    </View>
                    <View style={styles.view_footer}>
                      <Text style={styles.textCount}>
                        {item.booked} lần gọi
                      </Text>
                      <Text style={styles.text_review}>
                        {item.comment.length} đánh giá
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
});
