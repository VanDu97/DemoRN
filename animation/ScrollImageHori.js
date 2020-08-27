import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, ScrollView, StatusBar } from "react-native";
import { Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import { Animated } from "react-native";

const WIDTH = Dimensions.get("window").width;
const imageArray = new Array(10).fill(require("../assets/cat3.jpg"));
export default class ScrollImageHori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
    };
  }
  render() {
    console.log("o", this.state.scrollX);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          horizontal
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.state.scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
              listener: () => console.log("oooo", this.state.scrollX),
            }
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            alignSelf: "center",
            height: 400,
          }}
          pagingEnabled
          scrollEventThrottle={1}
        >
          {imageArray.map((ele, index) => {
            return (
              <View
                key={index}
                style={{
                  width: WIDTH,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 250,
                }}
              >
                <ImageBackground
                  source={ele}
                  style={{
                    width: WIDTH * 0.96,
                    height: 250,
                    borderRadius: 6,
                    overflow: "hidden",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.7);",
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      borderRadius: 6,
                    }}
                  >
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                      Image - {index}{" "}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            bottom: 250,
          }}
        >
          {imageArray.map((ele, index) => {
            const widthCircle = this.state.scrollX.interpolate({
              inputRange: [
                WIDTH * (index - 1),
                WIDTH * index,
                WIDTH * (index + 1),
              ],
              outputRange: [10, 20, 10],
              extrapolate: "clamp",
            });
            console.log(
              "iii",
              this.state.scrollX.addListener(
                ({ value }) => (this._value = value)
              )
            );
            return (
              <Animated.View
                key={index}
                style={{
                  width: widthCircle,
                  height: 10,
                  backgroundColor: "#999",
                  borderRadius: 5,
                  marginRight: 10,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
