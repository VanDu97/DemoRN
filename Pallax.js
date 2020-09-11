import React, { Component, PureComponent } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  AppState,
  Image,
  Animated,
} from "react-native";

import { isIphoneX, ifIphoneX } from "react-native-iphone-x-helper";

//import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';

import ParallaxScrollView from "react-native-parallax-scroll-view";

const PARALLAX_HEADER_HEIGHT = 300;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      loading: true,
      showModal: false,
    };
    // this.ws = new WS();
  }

  render() {
    console.log(this.props);
    const { onScroll = () => {} } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <ParallaxScrollView
          backgroundColor="#fff"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: false }
          )}
          //headerBackgroundColor="#000"
          backgroundColor="#fff"
          stickyHeaderHeight={
            Platform.OS == "android" ? 70 : isIphoneX() ? 75 : 62
          }
          parallaxHeaderHeight={300}
          backgroundSpeed={10}
          renderForeground={() => (
            <View style={{ position: "absolute", top: 45, left: 0 }}>
              <Text style={{ color: "red" }}>Custom Buttom</Text>
            </View>
          )}
          renderFixedHeader={() => {
            return (
              <View>
                <Text style={{ color: "#000" }}>Back</Text>
              </View>
            );
          }}
          renderStickyHeader={() => (
            <View
              style={{
                height: Platform.OS == "android" ? 70 : isIphoneX() ? 75 : 62,
                flexDirection: "row",
                borderBottomWidth: 0.5,
                borderBottomColor: "#eee",
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
                  top: isIphoneX() ? 45 : Platform.OS == "android" ? 40 : 32,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Hello Minh
              </Text>
            </View>
          )}
          renderBackground={() => (
            <View style={{ width: Dimensions.get("window").width }}>
              <Image
                source={{ uri: "https://source.unsplash.com/random" }}
                style={{ width: Dimensions.get("window").width, height: 300 }}
              />
            </View>
          )}
        >
          <ScrollView style={{ flex: 1 }}>
            <View>
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
          </ScrollView>
        </ParallaxScrollView>
      </View>
    );
  }
}
