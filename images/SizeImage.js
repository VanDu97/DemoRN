import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  StatusBar,
  //ScrollView,
  Platform,
  Animated,
  TouchableOpacity,
  Text,
} from "react-native";
import { StyleSheet } from "react-native";
const MAX_HEIGHT = 350;
const MIN_HEIGHT = 70;
const DISTANE = MAX_HEIGHT - MIN_HEIGHT;
export default class SizeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(-MAX_HEIGHT),
    };
  }
  renderItem = () => {
    const array = Array.from({ length: 50 });
    return (
      <View
        style={{
          marginTop: Platform.OS == "android" ? MAX_HEIGHT : 0,
          //alignSelf: "center",
        }}
      >
        {array.map((_, index) => {
          return (
            <TouchableOpacity
              style={{
                width: "90%",
                height: 40,
                backgroundColor: "#ddd",
                marginVertical: 15,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 6,
              }}
              key={index}
            >
              <Text style={{ fontSize: 20 }}>{index} </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  render() {
    console.log("index", this.state.scrollY);
    const translate = Animated.add(
      this.state.scrollY,
      Platform.OS == "android" ? 0 : MAX_HEIGHT
    );
    const headerTranslate = translate.interpolate({
      inputRange: [0, DISTANE],
      outputRange: [0, -DISTANE],
      extrapolate: "clamp",
    });
    const translateImage = translate.interpolate({
      inputRange: [0, DISTANE],
      outputRange: [0, -DISTANE],
      extrapolate: "clamp",
    });
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <Animated.ScrollView
          // style={{ flex: 1 }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          contentInset={{
            top: MAX_HEIGHT,
          }}
          contentOffset={{
            y: -MAX_HEIGHT,
          }}
        >
          {this.renderItem()}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.viewImage,
            {
              transform: [{ translateY: headerTranslate }],
            },
          ]}
        >
          <Animated.Image
            style={[
              styles.image,
              {
                transform: [{ translateY: translateImage }],
              },
            ]}
            resizeMode="cover"
            source={{
              uri:
                "https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562241-489-a--6--1568544517-width650height763.jpg",
            }}
          />
        </Animated.View>

        <Animated.View style={[styles.viewText]}>
          <Animated.Text style={styles.text}>Du Cena</Animated.Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewText: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    height: MAX_HEIGHT,
    backgroundColor: "transparent",
  },
  text: {
    textAlign: "center",
    marginTop: 40,
    color: "red",
    fontWeight: "bold",
    fontSize: 17,
  },
  image: {
    width: Dimensions.get("window").width,
    height: MAX_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    //overflow: "visible",
  },
  viewImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    height: MAX_HEIGHT,
    //backgroundColor: "transparent",
    backgroundColor: "skyblue",
  },
});
