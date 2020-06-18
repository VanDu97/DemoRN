import React, { Component } from "react";
import {
  View,
  Dimensions,
  StatusBar,
  //ScrollView,
  Platform,
  Animated,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { ifIphoneX, isIphoneX } from "react-native-iphone-x-helper";
import { SliderBox } from "react-native-image-slider-box";
const data = [
  "https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562241-489-a--6--1568544517-width650height763.jpg",
  "https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562241-489-a--6--1568544517-width650height763.jpg",
  "https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562241-489-a--6--1568544517-width650height763.jpg",
  "https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562241-489-a--6--1568544517-width650height763.jpg",
  "https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562241-489-a--6--1568544517-width650height763.jpg",
  "https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562241-489-a--6--1568544517-width650height763.jpg",
];
const MAX_HEIGHT = 350;
const MIN_HEIGHT = 70;
const DISTANE = MAX_HEIGHT - MIN_HEIGHT;

export default class SizeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(Platform.OS == "ios" ? -MAX_HEIGHT : 0),
    };
  }
  renderItem = () => {
    const array = Array.from({ length: 100 });
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
      outputRange: [
        0,
        -DISTANE + (Platform.OS == "android" ? 5 : isIphoneX() ? 13 : 0),
      ],
      extrapolate: "clamp",
    });
    const translateImage = translate.interpolate({
      inputRange: [0, DISTANE],
      outputRange: [0, 100],
      extrapolate: "clamp",
    });
    const opacityImage = translate.interpolate({
      inputRange: [0, DISTANE / 2, DISTANE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp",
    });
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        <Animated.ScrollView
          // style={{ flex: 1 }}
          //keyboardShouldPersistTaps="handle"
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
          <SliderBox
            //enableMomentum={false}
            ImageComponent={(url) => {
              return (
                <Image
                  //PlaceholderContent={<ActivityIndicator />}
                  style={{
                    width: "100%",
                    height: 300,
                  }}
                  source={url.source}
                />
              );
            }}
            images={data}
            sliderBoxHeight={MAX_HEIGHT}
            // onCurrentImagePressed={(index) => {
            //   console.warn(`image ${index} pressed`);
            // }}
            // dotColor={"red"}
            //autoplay={true}
            //circleLoop
          />
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
          <TouchableHighlight>
            <Animated.Image
              //blurRadius={0}
              style={[
                styles.image,
                {
                  opacity: opacityImage,
                  transform: [{ translateY: translateImage }],
                },
              ]}
              //resizeMode="cover"
              source={{
                uri:
                  "https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562241-489-a--6--1568544517-width650height763.jpg",
              }}
            />
          </TouchableHighlight>
        </Animated.View>

        <Animated.View style={[styles.viewText]}>
          <TouchableOpacity onPress={() => null}>
            <Icon
              name="left"
              size={27}
              color="#fff"
              style={{ marginLeft: Dimensions.get("window").width * 0.025 }}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewText: {
    marginTop: Platform.OS == "android" ? 5 : 0,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    left: 0,
    ///right: 0,
    //overflow: "hidden",
    overflow: "visible",

    backgroundColor: "transparent",
    ...ifIphoneX({
      top: 25,
      height: 70,
    }),
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
    //resizeMode: "cover",

    //overflow: "hidden",
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
