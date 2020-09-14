import React, { Component } from "react";
import PropTypes from "prop-types";
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
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { ImageBackground } from "react-native";
import { duration } from "moment";
import Icon from "react-native-vector-icons/AntDesign";
import { t } from "i18n-js";
const HEIGHT_HEADER = Dimensions.get("window").height;
const WITH_HEADER = Dimensions.get("window").width;

/***
 * Scroll down thì buttom mất và scroll up bottom hiện
 * Tại sao làm như vậy?
 * Nếu dùng interporate() thì nó sẽ chạy một khoảng chứ nó không cố định
 */

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
    name: "FAQs",
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
    };
    this.offset = 0;
    this.option_one = 0;
    this.option_two = 0;
    this.option_three = 0;
    this.option_four = 0;
    this.option_five = 0;
    this.option_six = 0;
  }
  render() {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
    const HEIGHT = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [250, 300],
      extrapolate: "extend",
    });
    const backGround = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: ["rgba(0, 0, 0,0)", "rgb(90, 210, 244)"],
      extrapolate: "clamp",
    });
    const opacityHeader = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Animated.View
          style={{
            position: "absolute",
            //top: isIphoneX() ? 50 : Platform.OS === "android" ? 13 : 24,
            left: 0,
            right: 0,
            zIndex: 2,
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
            }}
            onPress={() => {
              alert("Back New");
            }}
          >
            <Icon
              name="left"
              size={30}
              // color="#000"
              color={"#fff"}
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
            }}
          >
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => {
                alert("Back");
              }}
            >
              <Icon
                name="hearto"
                size={30}
                // color="#000"
                color={"#fff"}
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => {
                alert("Back");
              }}
            >
              <Icon
                name="sharealt"
                size={30}
                // color="#000"
                color={"#fff"}
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert("Back");
              }}
            >
              <Icon
                name="shoppingcart"
                size={30}
                // color="#000"
                color={"#fff"}
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
          <Animated.View
            style={{
              opacity: opacityHeader,
            }}
          >
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                alert(PixelRatio.getPixelSizeForLayoutSize(item.name));
                return (
                  <TouchableOpacity
                    style={{
                      borderBottomColor: "red",
                      borderBottomWidth: 4,
                      //marginHorizontal: index == 0 ? 15 : 10,
                      paddingVertical: 5,
                      width: WITH_HEADER * 0.35,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#fff",
                        position: "absolute",
                        bottom: 10,
                      }}
                    >
                      {item.name}{" "}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </Animated.View>
        </Animated.View>
        <Animated.ScrollView
          onScrollBeginDrag={(event) => {
            LayoutAnimation.linear();
            this.setState({ offset: event.nativeEvent.contentOffset.y });
            //this.offset = event.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            {
              useNativeDriver: false,
              listener: (text) => {
                console.log(text.nativeEvent);
                LayoutAnimation.linear();
              },
            }
          )}
          //   onScroll={(ev) => {
          //     if (ev.nativeEvent.contentOffset.y > 200) {
          //       LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
          //       //   this.props.navigation.setOptions({
          //       //     headerTransparent: false,
          //       //   });
          //       //this.setState({ bottom_touchable_position: 1 });
          //     }
          //     if (ev.nativeEvent.contentOffset.y < 200) {
          //       LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
          //       //   this.props.navigation.setOptions({
          //       //     headerTransparent: true,
          //       //   });
          //     //   this.setState({
          //     //     bottom_touchable_position: 0,
          //     //   });
          //     }
          //     // this.setState({end_drag_y:ev.nativeEvent.contentOffset.y})
          //   }}
        >
          <View>
            <View style={{}}>
              <Animated.Image
                resizeMode="cover"
                style={{
                  width: Dimensions.get("window").width,
                  height: 300,

                  //justifyContent: "center",
                }}
                source={{
                  uri:
                    "https://unku.store/wp-content/uploads/2019/01/basket-beautiful-beauty-opti.jpg",
                }}
              />
            </View>

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
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
}
