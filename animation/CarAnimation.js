import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  FlatList,
  ScrollView,
  StatusBar,
  Platform,
  Animated,
  LayoutAnimation,
  Dimensions,
} from "react-native";
import { Icon, Button } from "react-native-elements";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import { isIphoneX } from "react-native-iphone-x-helper";
export default class CarAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    const { scrollY } = this.state;
    const zIndexOne = scrollY.interpolate({
      inputRange: [150, 220],
      outputRange: [1, -1],
      extrapolate: "clamp",
    });
    const zIndexTwo = scrollY.interpolate({
      inputRange: [150, 220],
      outputRange: [-1, 1],
      extrapolate: "clamp",
    });
    const opacityOne = scrollY.interpolate({
      inputRange: [150, 220],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    const opacityTwo = scrollY.interpolate({
      inputRange: [150, 220],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    return (
      <View style={{ width: Dimensions.get("window").width }}>
        <StatusBar
          barStyle={Platform.OS == "ios" ? "light-content" : "dark-content"}
          translucent
          backgroundColor="#fff"
        />
        <Animated.View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 15,
            paddingVertical: 15,
            backgroundColor: "#ff9933",
            paddingTop: isIphoneX() ? 50 : Platform.OS == "ios" ? 35 : 40,
            borderBottomColor: "#ff9933",
            borderBottomWidth: 1,
            zIndex: zIndexOne,
            opacity: opacityOne,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5Pro
              name="arrow-left"
              color="#fff"
              size={20}
              style={{ marginRight: 15 }}
            />

            <Animated.Text style={{ color: "#fff" }}>
              Di chuyển sân bay
            </Animated.Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5Pro
              name="shopping-cart"
              color="#fff"
              size={20}
              light
              style={{ marginRight: 15 }}
            />
            <FontAwesome5Pro
              name="ellipsis-v-alt"
              color="#fff"
              size={20}
              light
            />
          </View>
        </Animated.View>
        <Animated.View
          style={{
            justifyContent: "space-between",
            paddingTop: 15,
            backgroundColor: "#fff",
            paddingTop: isIphoneX() ? 50 : Platform.OS == "ios" ? 35 : 40,
            zIndex: zIndexTwo,
            opacity: opacityTwo,
            position: "absolute",
            width: "100%",
            right: 0,
          }}
        >
          <Animated.View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
              paddingHorizontal: 15,
              paddingBottom: 15,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5Pro
                name="arrow-left"
                color="#000"
                size={20}
                style={{ marginRight: 15 }}
                onPress={() => alert("1")}
              />

              <Animated.Text style={{ color: "#000" }}>
                Di chuyển sân bay
              </Animated.Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5Pro
                name="shopping-cart"
                color="#000"
                size={20}
                light
                style={{ marginRight: 15 }}
                onPress={() => alert("2")}
              />
              <FontAwesome5Pro
                name="ellipsis-v-alt"
                color="#000"
                size={20}
                light
                onPress={() => alert("3")}
              />
            </View>
          </Animated.View>
        </Animated.View>

        <ScrollView
          bounces={false}
          scrollEventThrottle={1}
          contentContainerStyle={{}}
          stickyHeaderIndices={[2]}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            {
              listener: (event) => {
                console.log(event.nativeEvent);
                if (event.nativeEvent.contentOffset.y > 125) {
                  StatusBar.setBarStyle("dark-content");
                } else {
                  StatusBar.setBarStyle(
                    Platform.OS === "android" ? "dark-content" : "light-content"
                  );
                }
              },
            } // Optional async listener
          )}
        >
          <View
            onLayout={(event) => {
              console.log("eve", event.nativeEvent);
            }}
            style={{
              backgroundColor: "#ff9933",
              paddingBottom: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                width: "95%",
                alignSelf: "center",
                borderRadius: 6,
                paddingHorizontal: 15,
                paddingVertical: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "green",
                    marginRight: 20,
                  }}
                />
                <Text>Air Plan</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 10,
                }}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "blue",
                    marginRight: 20,
                  }}
                />
                <Text>Air Plan</Text>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: "#ddd",
                  paddingTop: 10,
                }}
              >
                <Text>03/12/2020 12:00 . 2 Khach</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingVertical: 15, paddingHorizontal: 15 }}>
            <Text>Di chuyen Rieng (4)</Text>
            <Text>Tu 800000</Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginLeft: 15,
                paddingVertical: 10,
              }}
            >
              {["Van", "Auddi", "BMW", "Lombogini"].map((e, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      borderWidth: 1,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 2,
                      marginRight: 10,
                      flexDirection: "row",
                    }}
                  >
                    <Text>{e}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{ backgroundColor: "#ddd" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 3, 3, 3, 5].map(
              (item, index) => {
                return (
                  <View
                    style={{
                      width: "95%",
                      borderWidth: 1,
                      alignSelf: "center",
                      borderColor: "#ddd",
                      paddingVertical: 60,
                      paddingHorizontal: 15,
                      borderRadius: 6,
                      marginTop: 15,
                      backgroundColor: "#fff",
                    }}
                    key={index}
                  >
                    <Text>Hello</Text>
                  </View>
                );
              }
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
