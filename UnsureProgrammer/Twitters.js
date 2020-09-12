import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView, Image, Animated } from "react-native";
const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_MAX_HEADER = 80;
const PROFILE_MIN_HEADER = 40;
/***
 * khi mà scroll down thì offset y sẽ thay đổi và tăng dần
 * Khi scroll up lên top thì offset y = 0 
 * hàm interpolate nó nó chạy ngược lại với vị trí y = 0 thì header = HEADER_MAX_HEIGHT
 */
export default class Twitters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp",
    });
    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_MAX_HEADER, PROFILE_MIN_HEADER],
      extrapolate: "clamp",
    });
    const profileMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_MAX_HEADER / 2,
        HEADER_MAX_HEIGHT,
      ],
      extrapolate: "clamp",
    });
    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    const headerTitle = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 5,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 26,
      ],
      outputRange: [-20, -20, -20, 5],
      extrapolate: "clamp",
    });
    const colorTitle = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 5,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 26,
      ],
      outputRange: ["#fff", "#fff", "#fff", "#000"],
      extrapolate: "clamp",
    });
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "lightskyblue",
            height: headerHeight,
            zIndex: headerZindex,
            alignItems: "center",
          }}
        >
          <Animated.View style={{ position: "absolute", bottom: headerTitle }}>
            <Animated.Text
              style={{ fontSize: 15, fontWeight: "bold", color: colorTitle }}
            >
              Du Cena
            </Animated.Text>
          </Animated.View>
        </Animated.View>

        <Animated.ScrollView
          scrollEventThrottle={16}
          style={{ flex: 1 }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.state.scrollY,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
              listener: (event) => console.log(event.nativeEvent),
            }
          )}
        >
          <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageHeight,
              borderRadius: PROFILE_MAX_HEADER / 2,
              borderWidth: 3,
              overflow: "hidden",
              marginTop: profileMarginTop,
              marginLeft: 10,
              borderColor: "white",
            }}
          >
            <Animated.Image
              source={{ uri: "https://source.unsplash.com/random" }}
              style={{ flex: 1, width: null, height: null }}
            />
          </Animated.View>
          <View>
            <Text style={{ fontSize: 26, fontWeight: "bold", paddingLeft: 10 }}>
              Du Cena
            </Text>
          </View>
          <View>
            <Text>
              Voice 1 In some parts of the world, rates of HIV/AIDS have
              decreased a lot. For example, Sub-Saharan Africa has the highest
              rates of HIV/AIDS in the world. But in East and South African
              countries, the number of people with HIV/AIDS has gone down by
              nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
              Makgato tells Al Jazeera how her country made this happen: Voice 3
              “Right from the beginning we decided to come to the issue boldly.
              We were very open about the size of the problem and did not try to
              hide from it. We were bold in the sense that we admitted that
              there was a problem. We were bold in bringing everyone involved
              together. We had a common purpose in fighting HIV and AIDS.” Voice
              2 Botswana still has a high rate of HIV at 21 percent. But this
              has dropped from 36 percent in the year 2000. Botswana has a
              government program that treats EVERY person no matter their age,
              sex or economic status. And they have seen particular improvement
              in one area: passing of HIV from mothers to their babies. The rate
              in Botswana has dropped from 40 to less than two percent! Many
              other countries have a similar drop in mother to child
              transmission. This is one of the major successes against the
              global HIV/AIDS epidemic. Voice 1 Many people with HIV/AIDS are
              also living longer. People with HIV/AIDS can take drugs to control
              the virus. These drugs are called Antiretrovirals or ARVs. By
              using ARVs correctly, people with HIV/AIDS can live long,
              productive lives. UNAIDS is the United Nations’ global effort to
              end AIDS. In a report, they said that for the first time, 53
              percent of the people who need ARVs are able to get them. This is
              more than twice the number of people who were able to get them in
              2012.
            </Text>
            <Text>
              Voice 1 In some parts of the world, rates of HIV/AIDS have
              decreased a lot. For example, Sub-Saharan Africa has the highest
              rates of HIV/AIDS in the world. But in East and South African
              countries, the number of people with HIV/AIDS has gone down by
              nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
              Makgato tells Al Jazeera how her country made this happen: Voice 3
              “Right from the beginning we decided to come to the issue boldly.
              We were very open about the size of the problem and did not try to
              hide from it. We were bold in the sense that we admitted that
              there was a problem. We were bold in bringing everyone involved
              together. We had a common purpose in fighting HIV and AIDS.” Voice
              2 Botswana still has a high rate of HIV at 21 percent. But this
              has dropped from 36 percent in the year 2000. Botswana has a
              government program that treats EVERY person no matter their age,
              sex or economic status. And they have seen particular improvement
              in one area: passing of HIV from mothers to their babies. The rate
              in Botswana has dropped from 40 to less than two percent! Many
              other countries have a similar drop in mother to child
              transmission. This is one of the major successes against the
              global HIV/AIDS epidemic. Voice 1 Many people with HIV/AIDS are
              also living longer. People with HIV/AIDS can take drugs to control
              the virus. These drugs are called Antiretrovirals or ARVs. By
              using ARVs correctly, people with HIV/AIDS can live long,
              productive lives. UNAIDS is the United Nations’ global effort to
              end AIDS. In a report, they said that for the first time, 53
              percent of the people who need ARVs are able to get them. This is
              more than twice the number of people who were able to get them in
              2012.
            </Text>
            <Text>
              Voice 1 In some parts of the world, rates of HIV/AIDS have
              decreased a lot. For example, Sub-Saharan Africa has the highest
              rates of HIV/AIDS in the world. But in East and South African
              countries, the number of people with HIV/AIDS has gone down by
              nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
              Makgato tells Al Jazeera how her country made this happen: Voice 3
              “Right from the beginning we decided to come to the issue boldly.
              We were very open about the size of the problem and did not try to
              hide from it. We were bold in the sense that we admitted that
              there was a problem. We were bold in bringing everyone involved
              together. We had a common purpose in fighting HIV and AIDS.” Voice
              2 Botswana still has a high rate of HIV at 21 percent. But this
              has dropped from 36 percent in the year 2000. Botswana has a
              government program that treats EVERY person no matter their age,
              sex or economic status. And they have seen particular improvement
              in one area: passing of HIV from mothers to their babies. The rate
              in Botswana has dropped from 40 to less than two percent! Many
              other countries have a similar drop in mother to child
              transmission. This is one of the major successes against the
              global HIV/AIDS epidemic. Voice 1 Many people with HIV/AIDS are
              also living longer. People with HIV/AIDS can take drugs to control
              the virus. These drugs are called Antiretrovirals or ARVs. By
              using ARVs correctly, people with HIV/AIDS can live long,
              productive lives. UNAIDS is the United Nations’ global effort to
              end AIDS. In a report, they said that for the first time, 53
              percent of the people who need ARVs are able to get them. This is
              more than twice the number of people who were able to get them in
              2012.
            </Text>
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
}
