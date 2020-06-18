import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
  Platform,
  Animated,
} from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { SliderBox } from "react-native-image-slider-box";
import { Image, colors } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";
const AnimatableIcon = Animatable.createAnimatableComponent(Icon);
import { ifIphoneX, isIphoneX } from "react-native-iphone-x-helper";
const PARALLAX_HEADER_HEIGHT = Dimensions.get("window").height * 0.45;

export default class DemoPallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      index: 1,
      scrollY: new Animated.Value(0),
    };
  }

  onSnap(index) {
    const { currentImageEmitter } = this.props;
    this.setState({ currentImage: index }, () => {
      if (currentImageEmitter) currentImageEmitter(this.state.currentImage);
    });
  }
  render() {
    const { onScroll = () => {} } = this.props;
    const { data } = this.state;
    const colorBack = this.state.scrollY.interpolate({
      inputRange: [
        0,
        PARALLAX_HEADER_HEIGHT / 4,
        PARALLAX_HEADER_HEIGHT / 2,
        PARALLAX_HEADER_HEIGHT,
      ],
      outputRange: ["#fff", "#ddd", "#444", "#000"],
      extrapolate: "clamp",
    });

    return (
      <ParallaxScrollView
        backgroundColor="#fff"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
          { useNativeDriver: false }
        )}
        stickyHeaderHeight={
          Platform.OS == "android" ? 70 : isIphoneX() ? 75 : 62
        }
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={10}
        renderForeground={() => {
          return (
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 20,
                bottom: 20,
                flexDirection: "row",
                borderColor: "#ddd",
                borderWidth: 0.5,
                paddingVertical: 5,
                paddingHorizontal: 8,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 3,
                backgroundColor: "#444",
              }}
            >
              <Icon name="heart" color="#fff" />
              <Text style={{ color: "#fff" }}>Image</Text>
            </TouchableOpacity>
          );
        }}
        renderFixedHeader={() => (
          <TouchableOpacity
            onPress={() => null}
            style={{
              position: "absolute",
              top: isIphoneX() ? 40 : Platform.OS == "android" ? 35 : 30,
            }}
          >
            <AnimatableIcon
              name="left"
              size={25}
              //color={"#fff"}

              //easing="ease-in-cubic"
              //transition={["opacity", "color"]}
              style={{ marginLeft: 5, color: colorBack }}
            />
          </TouchableOpacity>
        )}
        renderStickyHeader={() => (
          <TouchableOpacity
            onPress={() => null}
            style={{
              height: Platform.OS == "android" ? 70 : isIphoneX() ? 75 : 62,
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                position: "absolute",
                top: isIphoneX() ? 45 : Platform.OS == "android" ? 40 : 35,
              }}
            >
              China Orient & Yangtze Cruise
            </Text>
            
          </TouchableOpacity>
        )}
        renderBackground={() => (
          <TouchableOpacity>
            <Image
              resizeMode="cover"
              PlaceholderContent={<ActivityIndicator />}
              style={{
                width: Dimensions.get("window").width,
                height: PARALLAX_HEADER_HEIGHT,
              }}
              source={{
                uri:
                  "https://cdn.24h.com.vn/upload/3-2019/images/2019-09-15/1568562241-489-a--6--1568544517-width650height763.jpg",
              }}
              //imageLoadingColor="#fff"
            />
          </TouchableOpacity>

          //autoplay={true
        )}
      >
        <View>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
          <View>
            <Text>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View>
            <Text>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View>
            <Text>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View>
            <Text>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View>
            <Text>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View>
            <Text>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View>
            <Text>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View>
            <Text>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View>
            <Text>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>

          <View>
            <Text>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
        </View>
      </ParallaxScrollView>
    );
  }
}
