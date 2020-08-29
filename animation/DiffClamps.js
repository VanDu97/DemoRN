import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Animated,
  ScrollView,
  StatusBar,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
} from "react-native";
const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export default class DiffClamps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
    this.offset = 0;
  }
  _onScroll = (event) => {
    // UIManager.setLayoutAnimationEnabledExperimental &&
    //   UIManager.setLayoutAnimationEnabledExperimental(true);
    const currentOffset = event.nativeEvent.contentOffset.y;
    const dif = currentOffset - this.offset;
    console.log("i", dif, currentOffset);
    if (dif <= 0) {
      console.log("unclear");
      Animated.decay(this.state.animation, {
        toValue: 100,
        deceleration: 0.3,
        velocity: 1,
        useNativeDriver: false,
      }).start();
    } else {
      console.log("down");
      Animated.decay(this.state.animation, {
        toValue: 100,
        deceleration: 0.3,
        velocity: 1,
        useNativeDriver: false,
      }).start();
    }
    this.offset = currentOffset;
  };
  render() {
    const bottomHide = Animated.diffClamp(
      this.state.animation,
      0,
      35
    ).interpolate({
      inputRange: [0, 35],
      outputRange: [25, 95],
      extrapolate: "clamp",
    });
    console.log("o", this.state.animation);
    return (
      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          contentContainerStyle={{}}
          scrollEventThrottle={16}
          //onScroll={this.onScroll}
          onScroll={(e) => {
            this._onScroll(e);
          }}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { y: this.state.animation } } }],
          //   {
          //     useNativeDriver: false,
          //     listener: () => console.log("1", this.state.animation),
          //   } // Optional async listener
          // )}
        >
          <StatusBar barStyle="light-content" />
          <Animated.View
            style={{
              marginTop: 40,
              alignItems: "center",
              witdh: Dimensions.get("window").width * 0.9,
              alignSelf: "center",
            }}
          >
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
          </Animated.View>
        </Animated.ScrollView>
        <Animated.View
          style={{
            flex: 1,
            position: "absolute",
            bottom: 20,
            right: 100,
            transform: [
              {
                translateY: this.state.animation,
              },
            ],
          }}
        >
          <TouchableOpacity
            style={{
              width: 200,
              backgroundColor: "red",
              height: 35,
              borderRadius: 6,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>New Item</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}
