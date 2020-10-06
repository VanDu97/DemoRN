import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  FlatList,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import data from "./im";
import { isIphoneX } from "react-native-iphone-x-helper";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Paging = ({ scrollX }) => {
  const translateX = scrollX.interpolate({
    inputRange: [-WIDTH, 0, WIDTH],
    outputRange: [-30, 0, 30],
    extrapolate: "clamp",
  });
  return (
    <View style={styles.viewPaging}>
      <Animated.View
        style={[
          styles.viewParsetDot,
          {
            transform: [
              {
                translateX,
              },
            ],
          },
        ]}
      />
      {data.map((element, index) => {
        return (
          <View
            style={{
              width: 30,
              height: 30,
            }}
          >
            <View style={[styles.dot, { backgroundColor: element.color }]} />
          </View>
        );
      })}
    </View>
  );
};

const Ticker = ({ scrollX }) => {
  const translateY = scrollX.interpolate({
    inputRange: [-WIDTH, 0, WIDTH],
    outputRange: [40, 0, -40],
    // extrapolate: "clamp",
  });
  return (
    <View
      style={{
        position: "absolute",
        top: 10,
        left: 20,
        height: 40,
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={{
          transform: [
            {
              translateY,
            },
          ],
        }}
      >
        {data.map((item) => {
          return (
            <Animated.Text style={[styles.textType]} key={item.key}>
              {item.type.toLocaleUpperCase()}{" "}
            </Animated.Text>
          );
        })}
      </Animated.View>
    </View>
  );
};
export default class DemoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
    };
  }
  render() {
    const { scrollX } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Animated.FlatList
          data={data}
          pagingEnabled
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const inputRange = [
              WIDTH * (index - 1),
              WIDTH * index,
              WIDTH * (index + 1),
            ];
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1, 0],
              extrapolate: "clamp",
            });

            const opacity = scrollX.interpolate({
              inputRange: [
                (index - 0.3) * WIDTH,
                index * WIDTH,
                (index + 0.3) * WIDTH,
              ],
              outputRange: [0, 1, 0],
              extrapolate: "clamp",
            });
            const translateXHead = scrollX.interpolate({
              inputRange,
              outputRange: [WIDTH * 0.5, 0, -WIDTH * 0.5],
              extrapolate: "clamp",
            });
            const translateXDescription = scrollX.interpolate({
              inputRange,
              outputRange: [WIDTH * 0.5, 0, -WIDTH * 0.5],
            });

            //width * 0.1, 0, -width * 0.1
            return (
              <View
                style={{
                  width: WIDTH,
                  alignItems: "center",
                  height: Dimensions.get("window").height,
                }}
              >
                <Animated.Image
                  source={item.imageUri}
                  style={[
                    {
                      width: WIDTH * 0.75,
                      height: HEIGHT * 0.75,
                      flex: 1,
                    },
                    {
                      transform: [
                        {
                          scale,
                        },
                      ],
                    },
                  ]}
                  resizeMode="contain"
                />

                <Animated.View
                  style={{
                    flex: 0.5,
                    marginLeft: 50,
                  }}
                >
                  <Animated.Text
                    style={[
                      styles.textHeader,
                      {
                        transform: [
                          {
                            translateX: translateXHead,
                          },
                        ],
                        opacity,
                      },
                    ]}
                  >
                    {item.heading.toLocaleUpperCase()}{" "}
                  </Animated.Text>
                  <Animated.Text
                    style={[
                      styles.textDiscription,
                      {
                        transform: [
                          {
                            translateX: translateXDescription,
                          },
                        ],
                        opacity,
                      },
                    ]}
                  >
                    {item.description}{" "}
                  </Animated.Text>
                </Animated.View>
              </View>
            );
          }}
        />
        <Paging scrollX={scrollX} />
        <Ticker scrollX={scrollX} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 28,
    fontWeight: "bold",
  },
  textDiscription: {
    fontSize: 16,
    color: "#999",
    textAlign: "left",
  },
  textType: {
    fontSize: 38,
    fontWeight: "bold",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  viewDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#999",
    marginRight: 10,
    position: "absolute",
    bottom: 40,
    right: 10,
    flexDirection: "row",
  },
  viewParsetDot: {
    position: "absolute",
    bottom: 10,
    right: 100,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#999",
  },
  viewPaging: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    bottom: 20,
  },
});
