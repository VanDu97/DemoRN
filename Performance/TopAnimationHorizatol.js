import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  LayoutAnimation,
  Platform,
  UIManager,
  FlatList,
  Image,
  PixelRatio,
  InteractionManager,
  TouchableHighlightBase,
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { ImageBackground } from "react-native";
import { duration } from "moment";
import Icons from "react-native-vector-icons/AntDesign";
import { Icon } from "react-native-elements";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";

import { t } from "i18n-js";
import styles from "./style";
var pixelWidth = require("string-pixel-width");
const HEIGHT_HEADER = Dimensions.get("window").height;
const WITH_HEADER = Dimensions.get("window").width;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
/***
 * Scroll down thì buttom mất và scroll up bottom hiện
 * Tại sao làm như vậy?
 * Nếu dùng interporate() thì nó sẽ chạy một khoảng chứ nó không cố định
 */
const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 0;

const data = [
  {
    id: "1",
    name: "Package options",
  },
  {
    id: "2",
    name: "Add To Your Trip",
  },
  {
    id: "3",
    name: "Reviews",
  },
  {
    id: "4",
    name: "Things To Note",
  },
  {
    id: "5",
    name: "Location",
  },
  {
    id: "6",
    name: "About This Activity",
  },
  {
    id: "7",
    name: " FAQs ",
  },
];
const BASE = Platform.OS === "android" ? 5 : 10;
export default class TopAnimationHorizatol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      bottom_touchable_position: isIphoneX() ? 15 : 10,
      offset: 0,
      color: "#fff",
      borders: -1,
    };
    this.offset = 0;
    this.option_one = 0;
    this.option_two = 0;
    this.option_three = 0;
    this.option_four = 0;
    this.option_five = 0;
    this.option_six = 0;
    this.option_seven = 0;
    this.refs._scrollHorizontal;
    this.refs._scrollView;
    this.color = "#fff";
    this.borders = -1;
    this.colorAnimation = new Animated.Value(0);
    this.refs.statusBar;
  }
  handleScroll = (index) => {
    if (index === 0) {
      return Math.ceil(this.option_one);
    }
    if (index === 1) {
      return Math.ceil(this.option_two);
    }
    if (index === 2) {
      return Math.ceil(this.option_three);
    }
    if (index === 3) {
      return Math.ceil(this.option_four);
    }
    if (index === 4) {
      return Math.ceil(this.option_five);
    }
    if (index === 5) {
      return Math.ceil(this.option_six);
    }
    if (index === 6) {
      return Math.ceil(this.option_seven);
    }
  };
  render() {
    const HEIGHT = this.state.scrollY.interpolate({
      inputRange: [0, 300],
      outputRange: [HEADER_MAX_HEIGHT, 10],
      extrapolate: "extend",
    });
    const backGround = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: ["rgba(0, 0, 0,0)", "#fff"],
      extrapolate: "clamp",
    });
    const opacityHeader = this.state.scrollY.interpolate({
      inputRange: [0, 200, 300, 400],
      outputRange: [0, 0, 0, 1],
      extrapolate: "clamp",
    });

    const opcityOne = this.state.scrollY.interpolate({
      inputRange: [0, 250],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    const opcityTwo = this.state.scrollY.interpolate({
      inputRange: [0, 250],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    const opcityThree = this.state.scrollY.interpolate({
      inputRange: [0, 250],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    const heightAnimation = this.state.scrollY.interpolate({
      inputRange: [0, 150, 300],
      outputRange: [
        HEIGHT_HEADER * 0.1,
        HEIGHT_HEADER * 0.1,
        HEIGHT_HEADER * 0.14,
      ],
      extrapolate: "clamp",
    });
    console.log(
      this.option_one,
      this.option_two,
      this.option_three,
      this.option_four,
      this.option_five,
      this.option_six,
      this.option_seven
    );
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor="transparent"
          translucent
          animated
         
        />

        <Animated.Image
          resizeMode="cover"
          style={{
            flex: 1,
            width: "100%",
            height: HEIGHT,
            position: "absolute",
            // opacity: opcityThree,
            //justifyContent: "center",
          }}
          source={{
            uri:
              "https://unku.store/wp-content/uploads/2019/01/basket-beautiful-beauty-opti.jpg",
          }}
        />
        <Animated.View
          style={{
            position: "absolute",
            //top: isIphoneX() ? 50 : Platform.OS === "android" ? 13 : 24,
            left: 0,
            right: 0,
            zIndex: 10,
            flexDirection: "row",
            // paddingBottom: 6,
            //backgroundColor: "#fff",
            // borderBottomWidth: 1,
            // borderBottomColor: "#ddd",
            height: heightAnimation,
            backgroundColor: backGround,
          }}
        >
          <Animated.View
            style={{
              opacity: opcityOne,
              top: isIphoneX()
                ? HEIGHT_HEADER * 0.04
                : Platform.OS === "android"
                ? HEIGHT_HEADER * 0.03
                : HEIGHT_HEADER * 0.024,
              left: -10,
              zIndex: 11,
              position: "absolute",
            }}
          >
            <Icons
              name="left"
              size={30}
              //color="#000"
              onPress={() => {
                alert("Back New");
              }}
              color="#fff"
              style={{ paddingHorizontal: 20, paddingVertical: 15 }}
            />
          </Animated.View>

          <Animated.View
            style={{
              opacity: opcityTwo,
              top: isIphoneX()
                ? HEIGHT_HEADER * 0.04
                : Platform.OS === "android"
                ? HEIGHT_HEADER * 0.03
                : HEIGHT_HEADER * 0.024,
              left: -10,
              zIndex: 11,
              position: "absolute",
            }}
          >
            <Icons
              name="left"
              size={30}
              //color="#000"
              color="#000"
              onPress={() => {
                alert("Back New");
              }}
              style={{ paddingHorizontal: 20, paddingVertical: 15 }}
            />
          </Animated.View>
          <Animated.View
            style={{
              position: "absolute",
              top: isIphoneX()
                ? HEIGHT_HEADER * 0.055
                : Platform.OS === "android"
                ? HEIGHT_HEADER * 0.047
                : HEIGHT_HEADER * 0.04,
              right: 15,
              flexDirection: "row",
              zIndex: 11,
            }}
          >
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => {
                alert("Back");
              }}
            >
              <Icons
                name="hearto"
                size={30}
                // color="#000"
                color="#fff"
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => {
                alert("Back");
              }}
            >
              <Icons
                name="sharealt"
                size={30}
                // color="#000"
                color="#fff"
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert("Back");
              }}
            >
              <Icons
                name="shoppingcart"
                size={30}
                color="#fff"
                //color={this.color}
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{
              position: "absolute",
              top: isIphoneX()
                ? HEIGHT_HEADER * 0.055
                : Platform.OS === "android"
                ? HEIGHT_HEADER * 0.047
                : HEIGHT_HEADER * 0.04,
              right: 15,
              flexDirection: "row",
              zIndex: 11,
              opacity: opcityTwo,
            }}
          >
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => {
                alert("Back");
              }}
            >
              <Icons
                name="hearto"
                size={30}
                color="#000"
                //  color={this.color}
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => {
                alert("Back");
              }}
            >
              <Icons
                name="sharealt"
                size={30}
                color="#000"
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert("Back");
              }}
            >
              <Icons
                name="shoppingcart"
                size={30}
                color="#000"
                //color={this.color}
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{
              opacity: opacityHeader,
              marginLeft: 0,
            }}
          >
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              horizontal
              ref={(refs) => (this._scrollHorizontal = refs)}
              showsHorizontalScrollIndicator={false}
              ListFooterComponent={() => (
                <View style={{ width: WITH_HEADER * 0.2 }} />
              )}
              renderItem={({ item, index }) => {
                // alert(pixelWidth(item.name, { size: 16 }));
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this._scrollHorizontal.scrollToIndex({
                        animated: true,
                        index: index,
                        viewPosition: 0.5,
                      });
                      this._scrollView.scrollTo({
                        y: this.handleScroll(index) + 200,
                        animated: true,
                      });
                    }}
                    style={{
                      marginHorizontal: index == 0 ? 15 : 10,
                      paddingVertical: 5,
                      width: Math.ceil(pixelWidth(item.name, { size: 16 })) + 5,
                      alignItems: "center",
                      justifyContent: "center",
                      alignContent: "center",
                      zIndex: 4,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: index === this.borders ? "red" : "#000",
                        position: "absolute",
                        bottom: 10,
                        textAlign: "center",
                        fontWeight: "300",
                      }}
                    >
                      {item.name}{" "}
                    </Text>
                    <Animated.View
                      style={{
                        borderWidth: index === this.borders ? 2 : 0,
                        borderColor: index === this.borders ? "red" : "#fff",
                        position: "absolute",
                        bottom: 0,
                        width:
                          Math.ceil(pixelWidth(item.name, { size: 16 })) + 5,
                        borderRadius: 6,
                        left: -1.5,
                        opacity: 1,
                      }}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </Animated.View>
        </Animated.View>
        <Animated.ScrollView
          ref={(ref) => (this._scrollView = ref)}
          onScrollBeginDrag={(event) => {
            //LayoutAnimation.linear();
            this.setState({ offset: event.nativeEvent.contentOffset.y });
            //this.offset = event.nativeEvent.contentOffset.y;
          }}
          onMomentumScrollEnd={(event) => {
            //LayoutAnimation.linear();
            this.setState({ offset: event.nativeEvent.contentOffset.y });
            //this.offset = event.nativeEvent.contentOffset.y;
          }}
          //decelerationRate={0.95}
          scrollEventThrottle={16}
          //   onScroll={Animated.event(
          //     [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
          //     {
          //       useNativeDriver: false,
          //       //   listener: (text) => {
          //       //     // console.log(text.nativeEvent);
          //       //     LayoutAnimation.linear();
          //       //   },
          //     }
          //   )}
          onScroll={(event) => {
            console.log(event.nativeEvent.contentOffset.y);
            if (event.nativeEvent.contentOffset.y > 200) {
              //LayoutAnimation.linear();
              StatusBar.setBarStyle("dark-content");
              // this.statusBar.setNativeProps({
              //   barStyle: "dark-content",
              // });    console.log(this.statusBar.);
              this.state.scrollY.setValue(event.nativeEvent.contentOffset.y);
            }

            if (event.nativeEvent.contentOffset.y < 200) {
              //LayoutAnimation.linear();

              StatusBar.setBarStyle("light-content");
              // LayoutAnimation.linear();

              this.state.scrollY.setValue(event.nativeEvent.contentOffset.y);
            }
            if (
              event.nativeEvent.contentOffset.y >= this.option_one + 100 &&
              event.nativeEvent.contentOffset.y <= this.option_two
            ) {
              LayoutAnimation.easeInEaseOut();
              this._scrollHorizontal.scrollToIndex({
                animated: true,
                index: 0,
                viewPosition: 0.5,
              });
              InteractionManager.runAfterInteractions(() => {
                // ...long-running synchronous task...
                //this.setState({ borders: 0 });
              });
              this.borders = 0;
            } else if (
              event.nativeEvent.contentOffset.y >= this.option_two &&
              event.nativeEvent.contentOffset.y <= this.option_three
            ) {
              LayoutAnimation.easeInEaseOut();
              InteractionManager.runAfterInteractions(() => {
                // ...long-running synchronous task...

                this._scrollHorizontal.scrollToIndex({
                  animated: true,
                  index: 1,
                  viewPosition: 0.5,
                });
                this.borders = 1;
              });
            } else if (
              event.nativeEvent.contentOffset.y >= this.option_three &&
              event.nativeEvent.contentOffset.y <= this.option_four
            ) {
              LayoutAnimation.easeInEaseOut();
              InteractionManager.runAfterInteractions(() => {
                // ...long-running synchronous task...

                this._scrollHorizontal.scrollToIndex({
                  animated: true,
                  index: 2,
                  viewPosition: 0.5,
                });
                this.borders = 2;
                //this.setState({ borders: 2 });
              });
            } else if (
              event.nativeEvent.contentOffset.y >= this.option_four &&
              event.nativeEvent.contentOffset.y <= this.option_five
            ) {
              LayoutAnimation.easeInEaseOut();
              InteractionManager.runAfterInteractions(() => {
                // ...long-running synchronous task...

                this._scrollHorizontal.scrollToIndex({
                  animated: true,
                  index: 3,
                  viewPosition: 0.5,
                });
                this.borders = 3;
                //this.setState({ borders: 3 });
              });
            } else if (
              event.nativeEvent.contentOffset.y >= this.option_five &&
              event.nativeEvent.contentOffset.y <= this.option_six
            ) {
              LayoutAnimation.easeInEaseOut();
              InteractionManager.runAfterInteractions(() => {
                // ...long-running synchronous task...

                this._scrollHorizontal.scrollToIndex({
                  animated: true,
                  index: 4,
                  viewPosition: 0.5,
                });
                this.borders = 4;
                //this.setState({ borders: 4 });
              });
            } else if (
              event.nativeEvent.contentOffset.y >= this.option_six &&
              event.nativeEvent.contentOffset.y <= this.option_seven
            ) {
              LayoutAnimation.easeInEaseOut();
              InteractionManager.runAfterInteractions(() => {
                // ...long-running synchronous task...

                this._scrollHorizontal.scrollToIndex({
                  animated: true,
                  index: 5,
                  viewPosition: 0.5,
                });
                this.borders = 5;
                //this.setState({ borders: 5 });
              });
            } else if (
              event.nativeEvent.contentOffset.y >= this.option_seven &&
              event.nativeEvent.contentOffset.y <= this.option_seven + 400
            ) {
              LayoutAnimation.easeInEaseOut();
              InteractionManager.runAfterInteractions(() => {
                // ...long-running synchronous task...

                this._scrollHorizontal.scrollToIndex({
                  animated: true,
                  index: 6,
                  viewPosition: 0.5,
                });
                this.borders = 6;
                //this.setState({ borders: 6 });
              });
            }
          }}
        >
          <View style={{ marginTop: HEADER_MAX_HEIGHT, overflow: "visible" }}>
            <View
              style={{
                marginTop: 10,
                width: Dimensions.get("window").width * 0.96,
                alignSelf: "center",
              }}
            >
              <View
                style={{ marginHorizontal: 15 }}
                onLayout={(event) => {
                  console.log("Du1000", event.nativeEvent);
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 15,
                  }}
                >
                  Saigon Skydeck in Bitexco Financial Tower Admission Ticket
                </Text>
                <Text style={{ fontSize: 16 }}>
                  City views so beautifull girl and building high
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 15,
                    alignItems: "center",
                  }}
                >
                  <Icon
                    name="star"
                    type="font-awesome"
                    color="#FFA628"
                    size={24}
                  />
                  <Text
                    style={{
                      color: "#000",
                    }}
                  >
                    5{" "}
                  </Text>
                  <Text> (760 Reviews) </Text>
                  <Text> || </Text>
                  <Icon
                    name="user"
                    type="font-awesome"
                    color="#999"
                    size={24}
                  />
                  <Text>10+k Booked</Text>
                </View>

                <View
                  style={{
                    borderTopWidth: 1,
                    borderColor: "#ddd",
                    borderBottomWidth: 1,
                    paddingBottom: 15,
                  }}
                >
                  <View style={styles.viewContent}>
                    <FontAwesome5Pro name="clock" color="#424242" size={24} />
                    <Text style={styles.textContent}>Available Today</Text>
                  </View>
                  <View style={styles.viewContent}>
                    <FontAwesome5Pro name="lightbulb" color="red" size={24} />
                    <Text style={styles.textContent}>Instant Confirmation</Text>
                  </View>
                  <View style={styles.viewContent}>
                    <FontAwesome5Pro
                      name="usd-circle"
                      color="#424242"
                      size={24}
                    />
                    <Text style={styles.textContent}>No Cancellation</Text>
                  </View>
                  <View style={styles.viewContent}>
                    <FontAwesome5Pro name="print" color="#424242" size={24} />
                    <Text style={styles.textContent}>
                      Show mobile or printed voucher
                    </Text>
                  </View>
                  <View style={styles.viewContent}>
                    <FontAwesome5Pro
                      name="calendar-week"
                      color="#424242"
                      size={24}
                    />
                    <Text style={styles.textContent}>Open Date Ticket</Text>
                  </View>
                  <View style={styles.viewContent}>
                    <FontAwesome5Pro
                      name="clipboard-list"
                      color="#424242"
                      size={24}
                    />
                    <Text style={styles.textContent}>
                      Collect Physical Ticket
                    </Text>
                  </View>
                </View>
              </View>
              <View
                onLayout={(event) => {
                  this.option_one = event.nativeEvent.layout.y;
                  console.log("Du 1", event.nativeEvent);
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginVertical: 20,
                  }}
                >
                  Option one
                </Text>

                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS has gone
                  down by nearly 30 percent since 2010. Botswana’s Health
                  Minister Dorcas Makgato tells Al Jazeera how her country made
                  this happen: Voice 3 “Right from the beginning we decided to
                  come to the issue boldly. We were very open about the size of
                  the problem and did not try to hide from it. We were bold in
                  the sense that we admitted that there was a problem. We were
                  bold in bringing everyone involved together. We had a common
                  purpose in fighting HIV and AIDS.” Voice 2 Botswana still has
                  a high rate of HIV at 21 percent. But this has dropped from 36
                  percent in the year 2000. Botswana has a government program
                  that treats EVERY person no matter their age, sex or economic
                  status. And they have seen particular improvement in one area:
                  passing of HIV from mothers to their babies. The rate in
                  Botswana has dropped from 40 to less than two percent! Many
                  other countries have a similar drop in mother to child
                  transmission. This is one of the major successes against the
                  global HIV/AIDS epidemic. Voice 1 Many people with HIV/AIDS
                  are also living longer. People with HIV/AIDS can take drugs to
                  control the virus. These drugs are called Antiretrovirals or
                  ARVs. By using ARVs correctly, people with HIV/AIDS can live
                  long, productive lives. UNAIDS is the United Nations’ global
                  effort to end AIDS. In a report, they said that for the first
                  time, 53 percent of the people who need ARVs are able to get
                  them. This is more than twice the number of people who were
                  able to get them in 2012.
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS has gone
                  down by nearly 30 percent since 2010. Botswana’s Health
                  Minister Dorcas Makgato tells Al Jazeera how her country made
                  this happen: Voice 3 “Right from the beginning we decided to
                  come to the issue boldly. We were very open about the size of
                  the problem and did not try to hide from it. We were bold in
                  the sense that we admitted that there was a problem. We were
                  bold in bringing everyone involved together. We had a common
                  purpose in fighting HIV and AIDS.” Voice 2 Botswana still has
                  a high rate of HIV at 21 percent. But this has dropped from 36
                  percent in the year 2000. Botswana has a government program
                  that treats EVERY person no matter their age, sex or economic
                  status. And they have seen particular improvement in one area:
                  passing of HIV from mothers to their babies. The rate in
                  Botswana has dropped from 40 to less than two percent! Many
                  other countries have a similar drop in mother to child
                  transmission. This is one of the major successes against the
                  global HIV/AIDS epidemic. Voice 1 Many people with HIV/AIDS
                  are also living longer. People with HIV/AIDS can take drugs to
                  control the virus. These drugs are called Antiretrovirals or
                  ARVs. By using ARVs correctly, people with HIV/AIDS can live
                  long, productive lives. UNAIDS is the United Nations’ global
                  effort to end AIDS. In a report, they said that for the first
                  time, 53 percent of the people who need ARVs are able to get
                  them. This is more than twice the number of people who were
                  able to get them in 2012.
                </Text>
              </View>
              <View
                onLayout={(event) => {
                  this.option_two = event.nativeEvent.layout.y;
                  console.log("Du 2", event.nativeEvent);
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginVertical: 20,
                  }}
                >
                  Option two
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS has gone
                  down by nearly 30 percent since 2010. Botswana’s
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS
                </Text>
              </View>
              <View
                onLayout={(event) => {
                  this.option_three = event.nativeEvent.layout.y;
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginVertical: 20,
                  }}
                >
                  Option three
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS has gone
                  down by nearly 30 percent since 2010. Botswana’s Health
                  Minister Dorcas Makgato tells Al Jazeera how her country made
                  this happen: Voice 3 “Right from the beginning we decided to
                  come to the issue boldly. We were very open about the size of
                  the problem and did not try to hide from it. We were bold in
                  the sense that we admitted that there was a problem. We were
                  bold in bringing everyone involved together. We had a common
                  purpose in fighting HIV and AIDS.” Voice 2 Botswana still has
                  a high rate of HIV at 21 percent. But this has dropped from 36
                  percent in the year 2000. Botswana has a government program
                  that treats EVERY person no matter their age, sex or economic
                  status. And they have seen particular improvement in one area:
                  passing of HIV from mothers to their babies. The rate in
                  Botswana has dropped from 40 to less than two percent! Many
                  other countries have a similar drop in mother to child
                  transmission. This is one of the major successes against the
                  global HIV/AIDS epidemic. Voice 1 Many people with HIV/AIDS
                  are also living longer. People with HIV/AIDS can take drugs to
                  control the virus. These drugs are called Antiretrovirals or
                  ARVs. By using ARVs correctly, people with HIV/AIDS can live
                  long, productive lives. UNAIDS is the United Nations’ global
                  effort to end AIDS. In a report, they said that for the first
                  time, 53 percent of the people who need ARVs are able to get
                  them. This is more than twice the number of people who were
                  able to get them in 2012.
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS has gone
                  down by nearly 30 percent since 2010. Botswana’s Health
                  Minister Dorcas Makgato tells Al Jazeera how her country made
                  this happen: Voice 3 “Right from the beginning we decided to
                  come to the issue boldly. We were very open about the size of
                  the problem and did not try to hide from it. We were bold in
                  the sense that we admitted that there was a problem. We were
                  bold in bringing everyone involved together. We had a common
                  purpose in fighting HIV and AIDS.” Voice 2 Botswana still has
                  a high rate of HIV at 21 percent. But this has dropped from 36
                  percent in the year 2000. Botswana has a government program
                  that treats EVERY person no matter their age, sex or economic
                  status. And they have seen particular improvement in one area:
                  passing of HIV from mothers to their babies. The rate in
                  Botswana has dropped from 40 to less than two percent! Many
                  other countries have a similar drop in mother to child
                  transmission. This is one of the major successes against the
                  global HIV/AIDS epidemic. Voice 1 Many people with HIV/AIDS
                  are also living longer. People with HIV/AIDS can take drugs to
                  control the virus. These drugs are called Antiretrovirals or
                  ARVs. By using ARVs correctly, people with HIV/AIDS can live
                  long, productive lives. UNAIDS is the United Nations’ global
                  effort to end AIDS. In a report, they said that for the first
                  time, 53 percent of the people who need ARVs are able to get
                  them. This is more than twice the number of people who were
                  able to get them in 2012.
                </Text>
              </View>
              <View
                onLayout={(event) => {
                  this.option_four = event.nativeEvent.layout.y;
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginVertical: 20,
                  }}
                >
                  Option four
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS has gone
                  down by nearly 30 percent since 2010. Botswana’s Health
                  Minister Dorcas Makgato tells Al Jazeera how her country made
                  this happen: Voice 3 “Right from the beginning we decided to
                  come to the issue boldly. We were very open about the size of
                  the problem and did not try to hide from it. We were bold in
                  the sense that we admitted that there was a problem. We were
                  bold in bringing everyone involved together. We had a common
                  purpose in fighting HIV and AIDS.” Voice 2 Botswana still has
                  a high rate of HIV at 21 percent. But this has dropped from 36
                  percent in the year 2000. Botswana has a government program
                  that treats EVERY person no matter their age, sex or economic
                  status. And they have seen particular improvement in one area:
                  passing of HIV from mothers to their babies. The rate in
                  Botswana has dropped from 40 to less than two percent! Many
                  other countries have a similar drop in mother to child
                  transmission. This is one of the major successes against the
                  global HIV/AIDS epidemic. Voice 1 Many people with HIV/AIDS
                  are also living longer. People with HIV/AIDS can take drugs to
                  control the virus. These drugs are called Antiretrovirals or
                  ARVs. By using ARVs correctly, people with HIV/AIDS can live
                  long, productive lives. UNAIDS is the United Nations’ global
                  effort to end AIDS. In a report, they said that for the first
                  time, 53 percent of the people who need ARVs are able to get
                  them. This is more than twice the number of people who were
                  able to get them in 2012.
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS has gone
                  down by nearly 30 percent since 2010. Botswana’s Health
                  Minister Dorcas Makgato tells Al Jazeera how her country made
                  this happen: Voice 3 “Right from the beginning we decided to
                  come to the issue boldly. We were very open about the size of
                  the problem and did not try to hide from it. We were bold in
                  the sense that we admitted that there was a problem. We were
                  bold in bringing everyone involved together. We had a common
                  purpose in fighting HIV and AIDS.” Voice 2 Botswana still has
                  a high rate of HIV at 21 percent. But this has dropped from 36
                  percent in the year 2000. Botswana has a government program
                  that treats EVERY person no matter their age, sex or economic
                  status. And they have seen particular improvement in one area:
                  passing of HIV from mothers to their babies. The rate in
                  Botswana has dropped from 40 to less than two percent! Many
                  other countries have a similar drop in mother to child
                  transmission. This is one of the major successes against the
                  global HIV/AIDS epidemic. Voice 1 Many people with HIV/AIDS
                  are also living longer. People with HIV/AIDS can take drugs to
                  control the virus. These drugs are called Antiretrovirals or
                  ARVs. By using ARVs correctly, people with HIV/AIDS can live
                  long, productive lives. UNAIDS is the United Nations’ global
                  effort to end AIDS. In a report, they said that for the first
                  time, 53 percent of the people who need ARVs are able to get
                  them. This is more than twice the number of people who were
                  able to get them in 2012.
                </Text>
              </View>
              <View
                onLayout={(event) => {
                  this.option_five = event.nativeEvent.layout.y;
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginVertical: 20,
                  }}
                >
                  Option five
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the f
                  people who were able to get them in 2012.
                </Text>
              </View>
              <View
                onLayout={(event) => {
                  this.option_six = event.nativeEvent.layout.y;
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginVertical: 20,
                  }}
                >
                  Option six
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS has gone
                  down by nearly 30 percent since 2010. Botswana’s Health
                  Minister Dorcas Makgato tells Al Jazeera how her country made
                  this happen: Voice 3 “Right from the beginning we decided to
                  come to the issue boldly. We were very open
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS has gone
                  down by nearly 30 percent since 2010. Botswana’s Health
                  Minister Dorcas Makgato tells Al Jazeera how her country made
                  this happen: Voice 3 “Right from the beginning
                </Text>
              </View>
              <View
                onLayout={(event) => {
                  this.option_seven = event.nativeEvent.layout.y;
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginVertical: 20,
                  }}
                >
                  Option seven
                </Text>
                <Text>
                  Voice 1 In some parts of the world, rates of HIV/AIDS have
                  decreased a lot. For example, Sub-Saharan Africa has the
                  highest rates of HIV/AIDS in the world. But in East and South
                  African countries, the number of people with HIV/AIDS has gone
                  down by nearly 30 percent since 2010. Botswana’s Health
                  Minister Dorcas Makgato tells Al Jazeera how her country made
                  this happen: Voice 3 “Right from the beginning we decided to
                  come to the issue boldly. We were very open about the size of
                  the problem and did not try to hide from it. We were bold in
                  the sense that we admitted that there was a problem. We were
                  bold in bringing everyone involved together. We had a common
                  purpose in fighting HIV and AIDS.” Voice 2 Botswana still has
                  a high rate of HIV at 21 percent. But this has dropped from 36
                  percent in the year 2000. Botswana has a government program
                  that treats EVERY person no matter their age, sex or economic
                  status. And they have seen particular improvement in one area:
                  passing of HIV from mothers to their babies. The rate in
                  Botswana has dropped from 40 to less than two percent! Many
                  other countries have a similar drop in mother to child
                  transmission. This is one of the major successes against the
                  global HIV/AIDS epidemic. Voice 1 Many people with HIV/AIDS
                  are also living longer. People with HIV/AIDS can take drugs to
                  control the virus. These drugs are called Antiretrovirals or
                  ARVs. By using ARVs correctly, people with HIV/AIDS can live
                  long, productive lives. UNAIDS is the United Nations’ global
                  effort to end AIDS. In a report, they said that for the first
                  time, 53 percent of the people who need ARVs are able to get
                  them. This is more than twice the number of people who were
                  able to get them in 2012.
                </Text>
              </View>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
}
