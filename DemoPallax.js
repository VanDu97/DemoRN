import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { SliderBox } from "react-native-image-slider-box";
import { Image } from "react-native-elements";
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
    return (
      <ParallaxScrollView
        backgroundColor="#fff"
        onScroll={onScroll}
        stickyHeaderHeight={90}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={10}
        // contentContainerStyle={{
        //   zIndex: 10,
        //   position: "relative",
        // }}
        renderForeground={() => (
          <View>
            <Text>Hello</Text>
          </View>
        )}
        renderStickyHeader={() => (
          <View>
            <Text>Hello</Text>
          </View>
        )}
        renderBackground={() => (
          <SliderBox
            onSnapToItem={(index) => {
              console.log("index", index);
              this.onSnap(index);
            }}
            ImageComponent={(url) => {
              return (
                <TouchableOpacity>
                  <Image
                    resizeMode="cover"
                    PlaceholderContent={<ActivityIndicator />}
                    style={{
                      width: Dimensions.get("window").width,
                      height: PARALLAX_HEADER_HEIGHT,
                    }}
                    source={url.source}
                  />
                </TouchableOpacity>
              );
            }}
            images={data}
            sliderBoxHeight={PARALLAX_HEADER_HEIGHT}
            onCurrentImagePressed={(index) => {
              console.log(`image ${index} pressed`);
            }}
            dotColor={"red"}
          />
          //autoplay={true
        )}
      >
        <View>
          <SliderBox
            onSnapToItem={(index) => {
              console.log("index", index);
              this.onSnap(index);
            }}
            circleLoop
            ImageComponent={(url) => {
              return (
                <Image
                  resizeMode="cover"
                  PlaceholderContent={<ActivityIndicator />}
                  style={{
                    width: Dimensions.get("window").width,
                    height: PARALLAX_HEADER_HEIGHT,
                  }}
                  source={url.source}
                />
              );
            }}
            images={data}
            sliderBoxHeight={PARALLAX_HEADER_HEIGHT}
            onCurrentImagePressed={(index) => {
              console.log(`image ${index} pressed`);
            }}
            dotColor={"red"}
            currentImageEmitter={(index) => {
              console.log(`image ${index} emit`);
            }}

            //autoplay={true}
          />
        </View>
      </ParallaxScrollView>
    );
  }
}
