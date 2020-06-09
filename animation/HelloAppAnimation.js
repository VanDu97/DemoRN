import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  Animated,
} from "react-native";
const { width, height } = Dimensions.get("window");

export default class HelloAppAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: new Animated.Value(0),
      text: new Animated.Value(0),
      backGround: new Animated.Value(0),
    };
  }
  componentDidMount() {
    const icons = Animated.timing(this.state.icon, {
      toValue: 5,
      duration: 4000,
      useNativeDriver: false,
    }).start();
    const text = Animated.timing(this.state.text, {
      toValue: 5,
      duration: 4000,
      useNativeDriver: false,
    }).start();
    const backGround = Animated.timing(this.state.backGround, {
      toValue: 5,
      duration: 4000,
      useNativeDriver: false,
    }).start();
    // icon.loop();
    //Animated.loop(icons, text).start();
    //const anima = Animated.sequence([icons, text]);
    // Animated.loop(anima).start(({ finished }) => {
    //   anima.reset();
    // });
  }
  render() {
    const { icon, text } = this.state;
    const Top = icon.interpolate({
      inputRange: [0, 5],
      outputRange: [10, 150],
    });
    const bottom = text.interpolate({
      inputRange: [0, 5],
      outputRange: [10, 150],
    });

    return (
      <ImageBackground
        resizeMode="cover"
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          justifyContent: "center",
        }}
        source={{
          uri:
            "https://unku.store/wp-content/uploads/2019/01/basket-beautiful-beauty-opti.jpg",
        }}
      >
        <Animated.Image
          style={{
            position: "absolute",
            width: Dimensions.get("window").width * 0.6,
            height: Dimensions.get("window").height * 0.2,

            right: Dimensions.get("window").width * 0.5,
            left: Dimensions.get("window").width * 0.2,
            top: Top,
          }}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
          }}
        />
        <Animated.Text
          style={{
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold",
            position: "absolute",
            bottom,
            left: Dimensions.get("window").width * 0.2,
          }}
        >
          Welcome To Home Screen
        </Animated.Text>
      </ImageBackground>
    );
  }
}
