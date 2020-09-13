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
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

/***
 * Scroll down thì buttom mất và scroll up bottom hiện
 * Tại sao làm như vậy?
 * Nếu dùng interporate() thì nó sẽ chạy một khoảng chứ nó không cố định
 */
const BASE = Platform.OS === "android" ? 5 : 10;
export default class BotttomHide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      bottom_touchable_position: isIphoneX() ? 15 : 10,
      offset: 0,
    };
    this.offset = 0;
  }
  render() {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
    // const TOP = Animated.diffClamp(this.state.scrollY, 0, 80).interpolate({
    //   inputRange: [0, 100],
    //   outputRange: [5, 100],
    //   extrapolate: "clamp",
    // });
    const opacity = Animated.diffClamp(this.state.scrollY, 0, 100).interpolate({
      inputRange: [0, 110],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    const TOP = Animated.diffClamp(this.state.scrollY, this.state.offset, 200);

    //console.log("dpp", TOP);
    return (
      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          style={{}}
          onScrollBeginDrag={(event) => {
            LayoutAnimation.linear();
            this.setState({ offset: event.nativeEvent.contentOffset.y });
            //this.offset = event.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={1}
          //   onScroll={(event) => {
          //     Animated.event(
          //       [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
          //       {
          //         useNativeDriver: true,
          //         listener: (text) => {
          //           console.log(text.nativeEvent);
          //           LayoutAnimation.linear();
          //         },
          //       }
          //     );
          //   }}
          onScroll={(ev) => {
            if (ev.nativeEvent.contentOffset.y - this.state.offset > 10) {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

              this.setState({ bottom_touchable_position: -100 });
            }
            if (ev.nativeEvent.contentOffset.y - this.state.offset < -10) {
              console.log(
                ev.nativeEvent.contentOffset.y - this.state.offset,
                this.state.offset,
                ev.nativeEvent.contentOffset.y
              );
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

              this.setState({
                bottom_touchable_position: Platform.OS === "ios" ? 15 : 10,
              });
            }
            // this.setState({end_drag_y:ev.nativeEvent.contentOffset.y})
          }}
        >
          <StatusBar barStyle="dark-content" />
          <View>
            <View
              style={{
                marginTop: 10,
                width: Dimensions.get("window").width * 0.96,
                alignSelf: "center",
              }}
            >
              <Text>
                Voice 1 In some parts of the world, rates of HIV/AIDS have
                decreased a lot. For example, Sub-Saharan Africa has the highest
                rates of HIV/AIDS in the world. But in East and South African
                countries, the number of people with HIV/AIDS has gone down by
                nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
                Makgato tells Al Jazeera how her country made this happen: Voice
                3 “Right from the beginning we decided to come to the issue
                boldly. We were very open about the size of the problem and did
                not try to hide from it. We were bold in the sense that we
                admitted that there was a problem. We were bold in bringing
                everyone involved together. We had a common purpose in fighting
                HIV and AIDS.” Voice 2 Botswana still has a high rate of HIV at
                21 percent. But this has dropped from 36 percent in the year
                2000. Botswana has a government program that treats EVERY person
                no matter their age, sex or economic status. And they have seen
                particular improvement in one area: passing of HIV from mothers
                to their babies. The rate in Botswana has dropped from 40 to
                less than two percent! Many other countries have a similar drop
                in mother to child transmission. This is one of the major
                successes against the global HIV/AIDS epidemic. Voice 1 Many
                people with HIV/AIDS are also living longer. People with
                HIV/AIDS can take drugs to control the virus. These drugs are
                called Antiretrovirals or ARVs. By using ARVs correctly, people
                with HIV/AIDS can live long, productive lives. UNAIDS is the
                United Nations’ global effort to end AIDS. In a report, they
                said that for the first time, 53 percent of the people who need
                ARVs are able to get them. This is more than twice the number of
                people who were able to get them in 2012.
              </Text>
              <Text>
                Voice 1 In some parts of the world, rates of HIV/AIDS have
                decreased a lot. For example, Sub-Saharan Africa has the highest
                rates of HIV/AIDS in the world. But in East and South African
                countries, the number of people with HIV/AIDS has gone down by
                nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
                Makgato tells Al Jazeera how her country made this happen: Voice
                3 “Right from the beginning we decided to come to the issue
                boldly. We were very open about the size of the problem and did
                not try to hide from it. We were bold in the sense that we
                admitted that there was a problem. We were bold in bringing
                everyone involved together. We had a common purpose in fighting
                HIV and AIDS.” Voice 2 Botswana still has a high rate of HIV at
                21 percent. But this has dropped from 36 percent in the year
                2000. Botswana has a government program that treats EVERY person
                no matter their age, sex or economic status. And they have seen
                particular improvement in one area: passing of HIV from mothers
                to their babies. The rate in Botswana has dropped from 40 to
                less than two percent! Many other countries have a similar drop
                in mother to child transmission. This is one of the major
                successes against the global HIV/AIDS epidemic. Voice 1 Many
                people with HIV/AIDS are also living longer. People with
                HIV/AIDS can take drugs to control the virus. These drugs are
                called Antiretrovirals or ARVs. By using ARVs correctly, people
                with HIV/AIDS can live long, productive lives. UNAIDS is the
                United Nations’ global effort to end AIDS. In a report, they
                said that for the first time, 53 percent of the people who need
                ARVs are able to get them. This is more than twice the number of
                people who were able to get them in 2012.
              </Text>
              <Text>
                Voice 1 In some parts of the world, rates of HIV/AIDS have
                decreased a lot. For example, Sub-Saharan Africa has the highest
                rates of HIV/AIDS in the world. But in East and South African
                countries, the number of people with HIV/AIDS has gone down by
                nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
                Makgato tells Al Jazeera how her country made this happen: Voice
                3 “Right from the beginning we decided to come to the issue
                boldly. We were very open about the size of the problem and did
                not try to hide from it. We were bold in the sense that we
                admitted that there was a problem. We were bold in bringing
                everyone involved together. We had a common purpose in fighting
                HIV and AIDS.” Voice 2 Botswana still has a high rate of HIV at
                21 percent. But this has dropped from 36 percent in the year
                2000. Botswana has a government program that treats EVERY person
                no matter their age, sex or economic status. And they have seen
                particular improvement in one area: passing of HIV from mothers
                to their babies. The rate in Botswana has dropped from 40 to
                less than two percent! Many other countries have a similar drop
                in mother to child transmission. This is one of the major
                successes against the global HIV/AIDS epidemic. Voice 1 Many
                people with HIV/AIDS are also living longer. People with
                HIV/AIDS can take drugs to control the virus. These drugs are
                called Antiretrovirals or ARVs. By using ARVs correctly, people
                with HIV/AIDS can live long, productive lives. UNAIDS is the
                United Nations’ global effort to end AIDS. In a report, they
                said that for the first time, 53 percent of the people who need
                ARVs are able to get them. This is more than twice the number of
                people who were able to get them in 2012.
              </Text>
              <Text>
                Voice 1 In some parts of the world, rates of HIV/AIDS have
                decreased a lot. For example, Sub-Saharan Africa has the highest
                rates of HIV/AIDS in the world. But in East and South African
                countries, the number of people with HIV/AIDS has gone down by
                nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
                Makgato tells Al Jazeera how her country made this happen: Voice
                3 “Right from the beginning we decided to come to the issue
                boldly. We were very open about the size of the problem and did
                not try to hide from it. We were bold in the sense that we
                admitted that there was a problem. We were bold in bringing
                everyone involved together. We had a common purpose in fighting
                HIV and AIDS.” Voice 2 Botswana still has a high rate of HIV at
                21 percent. But this has dropped from 36 percent in the year
                2000. Botswana has a government program that treats EVERY person
                no matter their age, sex or economic status. And they have seen
                particular improvement in one area: passing of HIV from mothers
                to their babies. The rate in Botswana has dropped from 40 to
                less than two percent! Many other countries have a similar drop
                in mother to child transmission. This is one of the major
                successes against the global HIV/AIDS epidemic. Voice 1 Many
                people with HIV/AIDS are also living longer. People with
                HIV/AIDS can take drugs to control the virus. These drugs are
                called Antiretrovirals or ARVs. By using ARVs correctly, people
                with HIV/AIDS can live long, productive lives. UNAIDS is the
                United Nations’ global effort to end AIDS. In a report, they
                said that for the first time, 53 percent of the people who need
                ARVs are able to get them. This is more than twice the number of
                people who were able to get them in 2012.
              </Text>
              <Text>
                Voice 1 In some parts of the world, rates of HIV/AIDS have
                decreased a lot. For example, Sub-Saharan Africa has the highest
                rates of HIV/AIDS in the world. But in East and South African
                countries, the number of people with HIV/AIDS has gone down by
                nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
                Makgato tells Al Jazeera how her country made this happen: Voice
                3 “Right from the beginning we decided to come to the issue
                boldly. We were very open about the size of the problem and did
                not try to hide from it. We were bold in the sense that we
                admitted that there was a problem. We were bold in bringing
                everyone involved together. We had a common purpose in fighting
                HIV and AIDS.” Voice 2 Botswana still has a high rate of HIV at
                21 percent. But this has dropped from 36 percent in the year
                2000. Botswana has a government program that treats EVERY person
                no matter their age, sex or economic status. And they have seen
                particular improvement in one area: passing of HIV from mothers
                to their babies. The rate in Botswana has dropped from 40 to
                less than two percent! Many other countries have a similar drop
                in mother to child transmission. This is one of the major
                successes against the global HIV/AIDS epidemic. Voice 1 Many
                people with HIV/AIDS are also living longer. People with
                HIV/AIDS can take drugs to control the virus. These drugs are
                called Antiretrovirals or ARVs. By using ARVs correctly, people
                with HIV/AIDS can live long, productive lives. UNAIDS is the
                United Nations’ global effort to end AIDS. In a report, they
                said that for the first time, 53 percent of the people who need
                ARVs are able to get them. This is more than twice the number of
                people who were able to get them in 2012.
              </Text>
              <Text>
                Voice 1 In some parts of the world, rates of HIV/AIDS have
                decreased a lot. For example, Sub-Saharan Africa has the highest
                rates of HIV/AIDS in the world. But in East and South African
                countries, the number of people with HIV/AIDS has gone down by
                nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
                Makgato tells Al Jazeera how her country made this happen: Voice
                3 “Right from the beginning we decided to come to the issue
                boldly. We were very open about the size of the problem and did
                not try to hide from it. We were bold in the sense that we
                admitted that there was a problem. We were bold in bringing
                everyone involved together. We had a common purpose in fighting
                HIV and AIDS.” Voice 2 Botswana still has a high rate of HIV at
                21 percent. But this has dropped from 36 percent in the year
                2000. Botswana has a government program that treats EVERY person
                no matter their age, sex or economic status. And they have seen
                particular improvement in one area: passing of HIV from mothers
                to their babies. The rate in Botswana has dropped from 40 to
                less than two percent! Many other countries have a similar drop
                in mother to child transmission. This is one of the major
                successes against the global HIV/AIDS epidemic. Voice 1 Many
                people with HIV/AIDS are also living longer. People with
                HIV/AIDS can take drugs to control the virus. These drugs are
                called Antiretrovirals or ARVs. By using ARVs correctly, people
                with HIV/AIDS can live long, productive lives. UNAIDS is the
                United Nations’ global effort to end AIDS. In a report, they
                said that for the first time, 53 percent of the people who need
                ARVs are able to get them. This is more than twice the number of
                people who were able to get them in 2012.
              </Text>
              <Text>
                Voice 1 In some parts of the world, rates of HIV/AIDS have
                decreased a lot. For example, Sub-Saharan Africa has the highest
                rates of HIV/AIDS in the world. But in East and South African
                countries, the number of people with HIV/AIDS has gone down by
                nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
                Makgato tells Al Jazeera how her country made this happen: Voice
                3 “Right from the beginning we decided to come to the issue
                boldly. We were very open about the size of the problem and did
                not try to hide from it. We were bold in the sense that we
                admitted that there was a problem. We were bold in bringing
                everyone involved together. We had a common purpose in fighting
                HIV and AIDS.” Voice 2 Botswana still has a high rate of HIV at
                21 percent. But this has dropped from 36 percent in the year
                2000. Botswana has a government program that treats EVERY person
                no matter their age, sex or economic status. And they have seen
                particular improvement in one area: passing of HIV from mothers
                to their babies. The rate in Botswana has dropped from 40 to
                less than two percent! Many other countries have a similar drop
                in mother to child transmission. This is one of the major
                successes against the global HIV/AIDS epidemic. Voice 1 Many
                people with HIV/AIDS are also living longer. People with
                HIV/AIDS can take drugs to control the virus. These drugs are
                called Antiretrovirals or ARVs. By using ARVs correctly, people
                with HIV/AIDS can live long, productive lives. UNAIDS is the
                United Nations’ global effort to end AIDS. In a report, they
                said that for the first time, 53 percent of the people who need
                ARVs are able to get them. This is more than twice the number of
                people who were able to get them in 2012.
              </Text>
              <Text>
                Voice 1 In some parts of the world, rates of HIV/AIDS have
                decreased a lot. For example, Sub-Saharan Africa has the highest
                rates of HIV/AIDS in the world. But in East and South African
                countries, the number of people with HIV/AIDS has gone down by
                nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
                Makgato tells Al Jazeera how her country made this happen: Voice
                3 “Right from the beginning we decided to come to the issue
                boldly. We were very open about the size of the problem and did
                not try to hide from it. We were bold in the sense that we
                admitted that there was a problem. We were bold in bringing
                everyone involved together. We had a common purpose in fighting
                HIV and AIDS.” Voice 2 Botswana still has a high rate of HIV at
                21 percent. But this has dropped from 36 percent in the year
                2000. Botswana has a government program that treats EVERY person
                no matter their age, sex or economic status. And they have seen
                particular improvement in one area: passing of HIV from mothers
                to their babies. The rate in Botswana has dropped from 40 to
                less than two percent! Many other countries have a similar drop
                in mother to child transmission. This is one of the major
                successes against the global HIV/AIDS epidemic. Voice 1 Many
                people with HIV/AIDS are also living longer. People with
                HIV/AIDS can take drugs to control the virus. These drugs are
                called Antiretrovirals or ARVs. By using ARVs correctly, people
                with HIV/AIDS can live long, productive lives. UNAIDS is the
                United Nations’ global effort to end AIDS. In a report, they
                said that for the first time, 53 percent of the people who need
                ARVs are able to get them. This is more than twice the number of
                people who were able to get them in 2012.
              </Text>
              <Text>
                Voice 1 In some parts of the world, rates of HIV/AIDS have
                decreased a lot. For example, Sub-Saharan Africa has the highest
                rates of HIV/AIDS in the world. But in East and South African
                countries, the number of people with HIV/AIDS has gone down by
                nearly 30 percent since 2010. Botswana’s Health Minister Dorcas
                Makgato tells Al Jazeera how her country made this happen: Voice
                3 “Right from the beginning we decided to come to the issue
                boldly. We were very open about the size of the problem and did
                not try to hide from it. We were bold in the sense that we
                admitted that there was a problem. We were bold in bringing
                everyone involved together. We had a common purpose in fighting
                HIV and AIDS.” Voice 2 Botswana still has a high rate of HIV at
                21 percent. But this has dropped from 36 percent in the year
                2000. Botswana has a government program that treats EVERY person
                no matter their age, sex or economic status. And they have seen
                particular improvement in one area: passing of HIV from mothers
                to their babies. The rate in Botswana has dropped from 40 to
                less than two percent! Many other countries have a similar drop
                in mother to child transmission. This is one of the major
                successes against the global HIV/AIDS epidemic. Voice 1 Many
                people with HIV/AIDS are also living longer. People with
                HIV/AIDS can take drugs to control the virus. These drugs are
                called Antiretrovirals or ARVs. By using ARVs correctly, people
                with HIV/AIDS can live long, productive lives. UNAIDS is the
                United Nations’ global effort to end AIDS. In a report, they
                said that for the first time, 53 percent of the people who need
                ARVs are able to get them. This is more than twice the number of
                people who were able to get them in 2012.
              </Text>
            </View>
          </View>
        </Animated.ScrollView>

        <Animated.View
          style={{
            width: Dimensions.get("window").width * 0.6,
            alignSelf: "center",
            position: "absolute",
            bottom: this.state.bottom_touchable_position,
            //bottom: TOP,
            zIndex: 1,
            // transform: [
            //   {
            //     translateY: TOP,
            //   },
            // ],
          }}
        >
          <TouchableOpacity
            onPress={() => alert("New")}
            style={{
              backgroundColor: "red",
              paddingVertical: 15,
              borderRadius: 6,
              width: Dimensions.get("window").width * 0.6,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              New
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}
