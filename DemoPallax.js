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
  FlatList,
  StyleSheet,
} from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { SliderBox } from "react-native-image-slider-box";
import { Image, colors } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";
const AnimatableIcon = Animatable.createAnimatableComponent(Icon);
import { ifIphoneX, isIphoneX } from "react-native-iphone-x-helper";
const PARALLAX_HEADER_HEIGHT = Dimensions.get("window").height * 0.45;
const dataFlat = [
  {
    name: "Package Options",
    id: 1,
  },
  {
    name: "Add To Your Trip",
    id: 2,
  },
  {
    name: "Review",
    id: 3,
  },
  {
    name: "Things To Note",
    id: 4,
  },
  {
    name: "Location",
    id: 5,
  },
  {
    name: "About This Activity",
    id: 6,
  },
];
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
    this.refs._option;
    this.refs._review;
    this.refs.flatList;
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
          Platform.OS == "android" ? 95 : isIphoneX() ? 100 : 87
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
          <View
            onPress={() => null}
            style={{
              height: Platform.OS == "android" ? 95 : isIphoneX() ? 100 : 87,

              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              flexDirection: "column",
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
            <View style={{ position: "absolute", bottom: 5 }}>
              <FlatList
                data={dataFlat}
                ref={(ref) => (this.flatList = ref)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={(item) => item.id.toString()}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        if (item.id == 3) {
                          console.log("op", this.flatList);
                        }
                      }}
                      style={{
                        marginHorizontal: 5,
                        marginLeft: 10,
                        borderBottomColor: "red",
                        borderBottomWidth: 3,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                          color: "red",
                        }}
                      >
                        {item.name}{" "}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
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
          <View style={styles.view}>
            <Text style={styles.textTitle}>Package Options</Text>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:This man’s name is Jay. He
              was part of a video series by Momondo, a travel company that had a
              competition. To join this competition people took a DNA test. It
              showed their genetic ancestry. It showed where each person’s
              family had come from for many, many generations. Jay thought the
              test would show that he is 100 percent English - from Great
              Britain. But he was wrong! The test showed that Jay is 55 percent
              Irish. He is only 30 percent English. It also showed he is five
              percent German and even a bit Turkish. Jay responded to the
              results:This man’s name is Jay. He was part of a video series by
              Momondo, a travel company that had a competition. To join this
              competition people took a DNA test. It showed their genetic
              ancestry. It showed where each person’s family had come from for
              many, many generations. Jay thought the test would show that he is
              100 percent English - from Great Britain. But he was wrong! The
              test showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.textTitle}>Add To Your Trip</Text>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:This man’s name is Jay. He
              was part of a video series by Momondo, a travel company that had a
              competition. To join this competition people took a DNA test. It
              showed their genetic ancestry. It showed where each person’s
              family had come from for many, many generations. Jay thought the
              test would show that he is 100 percent English - from Great
              Britain. But he was wrong! The test showed that Jay is 55 percent
              Irish. He is only 30 percent English. It also showed he is five
              percent German and even a bit Turkish. Jay responded to the
              results:This man’s name is Jay. He was part of a video series by
              Momondo, a travel company that had a competition. To join this
              competition people took a DNA test. It showed their genetic
              ancestry. It showed where each person’s family had come from for
              many, many generations. Jay thought the test would show that he is
              100 percent English - from Great Britain. But he was wrong! The
              test showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view} ref={(ref) => (this._option = ref)}>
            <Text style={styles.textTitle}>Reviews</Text>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:This man’s name is Jay. He
              was part of a video series by Momondo, a travel company that had a
              competition. To join this competition people took a DNA test. It
              showed their genetic ancestry. It showed where each person’s
              family had come from for many, many generations. Jay thought the
              test would show that he is 100 percent English - from Great
              Britain. But he was wrong! The test showed that Jay is 55 percent
              Irish. He is only 30 percent English. It also showed he is five
              percent German and even a bit Turkish. Jay responded to the
              results:This man’s name is Jay. He was part of a video series by
              Momondo, a travel company that had a competition. To join this
              competition people took a DNA test. It showed their genetic
              ancestry. It showed where each person’s family had come from for
              many, many generations. Jay thought the test would show that he is
              100 percent English - from Great Britain. But he was wrong! The
              test showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.textTitle}>Things To Note</Text>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:This man’s name is Jay. He
              was part of a video series by Momondo, a travel company that had a
              competition. To join this competition people took a DNA test. It
              showed their genetic ancestry. It showed where each person’s
              family had come from for many, many generations. Jay thought the
              test would show that he is 100 percent English - from Great
              Britain. But he was wrong! The test showed that Jay is 55 percent
              Irish. He is only 30 percent English. It also showed he is five
              percent German and even a bit Turkish. Jay responded to the
              results:This man’s name is Jay. He was part of a video series by
              Momondo, a travel company that had a competition. To join this
              competition people took a DNA test. It showed their genetic
              ancestry. It showed where each person’s family had come from for
              many, many generations. Jay thought the test would show that he is
              100 percent English - from Great Britain. But he was wrong! The
              test showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.textTitle}>Location</Text>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:This man’s name is Jay. He
              was part of a video series by Momondo, a travel company that had a
              competition. To join this competition people took a DNA test. It
              showed their genetic ancestry. It showed where each person’s
              family had come from for many, many generations. Jay thought the
              test would show that he is 100 percent English - from Great
              Britain. But he was wrong! The test showed that Jay is 55 percent
              Irish. He is only 30 percent English. It also showed he is five
              percent German and even a bit Turkish. Jay responded to the
              results:This man’s name is Jay. He was part of a video series by
              Momondo, a travel company that had a competition. To join this
              competition people took a DNA test. It showed their genetic
              ancestry. It showed where each person’s family had come from for
              many, many generations. Jay thought the test would show that he is
              100 percent English - from Great Britain. But he was wrong! The
              test showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.textTitle}>About This Activity</Text>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:This man’s name is Jay. He
              was part of a video series by Momondo, a travel company that had a
              competition. To join this competition people took a DNA test. It
              showed their genetic ancestry. It showed where each person’s
              family had come from for many, many generations. Jay thought the
              test would show that he is 100 percent English - from Great
              Britain. But he was wrong! The test showed that Jay is 55 percent
              Irish. He is only 30 percent English. It also showed he is five
              percent German and even a bit Turkish. Jay responded to the
              results:This man’s name is Jay. He was part of a video series by
              Momondo, a travel company that had a competition. To join this
              competition people took a DNA test. It showed their genetic
              ancestry. It showed where each person’s family had come from for
              many, many generations. Jay thought the test would show that he is
              100 percent English - from Great Britain. But he was wrong! The
              test showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
        </View>
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: Dimensions.get("window").width * 0.95,
    alignSelf: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
