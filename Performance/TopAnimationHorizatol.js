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

import { t } from "i18n-js";
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
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 70;

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
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "extend",
    });
    const backGround = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: ["rgba(0, 0, 0,0)", "#fff"],
      extrapolate: "clamp",
    });
    const opacityHeader = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    const colorBorder = this.state.scrollY.interpolate({
      inputRange: [0, Math.ceil(this.option_one), Math.ceil(this.option_two)],
      outputRange: ["#fff", "#FF0000", "#fff"],
      extrapolate: "clamp",
    });
    const TOP = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [HEADER_MAX_HEIGHT, 0],
      extrapolate: "clamp",
    });
    const colorIcon = this.state.scrollY.interpolate({
      inputRange: [0, 150, 300],
      outputRange: ["#fff", "#000", "#000"],
      extrapolate: "clamp",
    });
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle={this.color === "#fff" ? "light-content" : "dark-content"}
          backgroundColor="transparent"
          translucent
        />
        <Animated.Image
          resizeMode="cover"
          style={{
            flex: 1,
            width: "100%",
            height: HEIGHT,
            position: "absolute",

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
            height: isIphoneX()
              ? HEIGHT_HEADER * 0.14
              : Platform.OS === "android"
              ? HEIGHT_HEADER * 0.14
              : HEIGHT_HEADER * 0.14,
            backgroundColor: backGround,
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              top: isIphoneX()
                ? HEIGHT_HEADER * 0.055
                : Platform.OS === "android"
                ? HEIGHT_HEADER * 0.047
                : HEIGHT_HEADER * 0.04,
              left: -10,
              zIndex: 11,
            }}
            onPress={() => {
              alert("Back New");
            }}
          >
            <Icons
              name="left"
              size={30}
              //color="#000"
              color={this.color}
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>

          <View
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
                color={this.color}
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
                color={this.color}
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
                // color="#000"
                color={this.color}
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
          <Animated.View
            style={{
              opacity: opacityHeader,
              marginLeft: -60,
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
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#000",
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
          style={{
            marginTop: TOP,
          }}
          ref={(ref) => (this._scrollView = ref)}
          onScrollBeginDrag={(event) => {
            LayoutAnimation.linear();
            this.setState({ offset: event.nativeEvent.contentOffset.y });
            //this.offset = event.nativeEvent.contentOffset.y;
          }}
          //decelerationRate={0.7}
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
            if (event.nativeEvent.contentOffset.y > 200) {
              LayoutAnimation.linear();
              InteractionManager.runAfterInteractions(() => {
                // ...long-running synchronous task...
                this.color = "#000";
              });

              this.state.scrollY.setValue(event.nativeEvent.contentOffset.y);
            }
            if (event.nativeEvent.contentOffset.y < 150) {
              LayoutAnimation.linear();
              InteractionManager.runAfterInteractions(() => {
                // ...long-running synchronous task...
                this.color = "#FFF";
              });
              this.state.scrollY.setValue(event.nativeEvent.contentOffset.y);
            }
            if (
              event.nativeEvent.contentOffset.y >= this.option_one &&
              event.nativeEvent.contentOffset.y <= this.option_two
            ) {
              LayoutAnimation.linear();
              this._scrollHorizontal.scrollToIndex({
                animated: true,
                index: 0,
                viewPosition: 0.5,
              });
              InteractionManager.runAfterInteractions(() => {
                this.borders = 0;
                // ...long-running synchronous task...
                //this.setState({ borders: 0 });
              });
            } else if (
              event.nativeEvent.contentOffset.y >= this.option_two &&
              event.nativeEvent.contentOffset.y <= this.option_three
            ) {
              LayoutAnimation.linear();
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
              LayoutAnimation.linear();
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
              LayoutAnimation.linear();
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
              LayoutAnimation.linear();
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
              LayoutAnimation.linear();
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
              LayoutAnimation.linear();
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
          {console.log("2222", this._scrollHorizontal)}
          <View>
            <View style={{}} />

            <View
              style={{
                marginTop: 10,
                width: Dimensions.get("window").width * 0.96,
                alignSelf: "center",
              }}
            >
              <View
                onLayout={(event) => {
                  this.option_one = event.nativeEvent.layout.y;
                  console.log("Du", event.nativeEvent);
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
