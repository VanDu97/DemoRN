import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import data from "./im";
const { width, height } = Dimensions.get("window");
const Items = ({
  type,
  imageUri,
  heading,
  description,
  key,
  color,
  scrollX,
  index,
}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateXHeader = scrollX.interpolate({
    inputRange,
    outputRange: [width * -0.1, 0, width * 0.2],
  });
  const opacity = scrollX.interpolate({
    inputRange: [(index - 1.8) * width, index * width, (index + 0.2) * width],
    outputRange: [0, 1, 0],
  });
  return (
    <View style={styles.viewItem}>
      <Animated.Image
        source={imageUri}
        style={[
          styles.image,
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
      <View style={styles.viewContent}>
        <Animated.Text
          style={[
            styles.textHeader,
            {
              transform: [
                {
                  translateX: translateXHeader,
                },
              ],
              opacity,
            },
          ]}
        >
          {heading}{" "}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.textDescription,
            {
              transform: [
                {
                  translateX: translateXHeader,
                },
              ],
              opacity,
            },
          ]}
        >
          {description}{" "}
        </Animated.Text>
      </View>
    </View>
  );
};

const TickHeader = ({ scrollX }) => {
  const translateY = scrollX.interpolate({
    inputRange: [-width, 0, width],
    outputRange: [40, 0, -40],
  });
  return (
    <View style={[styles.tickHeader, {}]}>
      <Animated.View
        style={[
          { height: 45, alignSelf: "center" },
          {
            transform: [
              {
                translateY,
              },
            ],
          },
        ]}
      >
        {data.map((item) => {
          return <Text style={styles.textHeader}>{item.type} </Text>;
        })}
      </Animated.View>
    </View>
  );
};

const Circle = ({ scrollX }) => {
  return (
    <View style={{}}>
      {data.map((item, index) => {
        const opacity = scrollX.interpolate({
          inputRange: [width * (index - 1), width * index, width * (index + 1)],
          outputRange: [0, 1, 0],
        });
        const scale = scrollX.interpolate({
          inputRange: [
            width * (index - 0.2),
            width * index,
            width * (index + 1.2),
          ],
          //inputRange: [width * (index - 1), width * index, width * (index + 1)],
          outputRange: [0, 1, 0],
        });
        const indexs = scrollX.interpolate({
          inputRange: [-width * 0.2, 0, width * 0.2],
          outputRange: [-1, 0, -1],
        });
        return (
          <Animated.View
            key={item.key}
            style={[
              {
                width: width * 0.6,
                height: width * 0.6,
                borderRadius: width * 0.3,
                backgroundColor: item.color,
                position: "absolute",
                top: height * 0.14,
                flexDirection: "row",
                left: width * 0.2,
                opacity,
                overflow: "hidden",
              },
              {
                transform: [
                  {
                    scale,
                  },
                ],
              },
            ]}
          />
        );
      })}
    </View>
  );
};
const Paging = ({ scrollX }) => {
  const translateX = scrollX.interpolate({
    inputRange: [-width, 0, width],
    outputRange: [-30, 0, 30],
  });
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        right: 10,
        bottom: 40,
      }}
    >
      <Animated.View
        style={[
          {
            height: 30,
            width: 30,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: "#ddd",
            position: "absolute",
            right: 90,
            bottom: -10,
            alignItems: "center",
          },
          {
            transform: [
              {
                translateX,
              },
            ],
          },
        ]}
      />
      {data.map((item) => {
        return (
          <View style={styles.viewDot}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
          </View>
        );
      })}
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
        <Circle scrollX={scrollX} />
        <Animated.FlatList
          data={data}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            return <Items scrollX={scrollX} {...item} index={index} />;
          }}
        />
        <Image
          source={require("../assets/ue_black_logo.png")}
          style={styles.imageIcon}
          resizeMode="contain"
        />
        <Paging scrollX={scrollX} />
        <TickHeader scrollX={scrollX} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: width * 0.75,
    height: width * 0.75,
    flex: 1,
  },
  viewItem: {
    width,
    height,
    alignItems: "center",
  },
  viewContent: {
    flex: 0.6,
    marginLeft: width * 0.3,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  textDescription: {
    fontSize: 16,
    textAlign: "left",
  },
  imageIcon: {
    width: 200,
    height: 200,
    position: "absolute",
    left: 10,
    bottom: 10,
    transform: [
      { translateX: -120 / 2 },
      { translateY: -10 / 2 },
      { rotateZ: "-90deg" },
    ],
    resizeMode: "contain",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  viewDot: {
    alignItems: "center",
    width: 30,
  },
  tickHeader: {
    position: "absolute",
    top: 10,
    left: 20,
    overflow: "hidden",
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
