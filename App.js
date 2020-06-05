/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  ImageBackground,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { onScrollEvent } from "react-native-redash";

class App extends Component {
  render() {
    return (
      <Animated.ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          style={{ width: "100%", height: 500 }}
          source={{
            uri:
              "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        />
        <Text>Hello</Text>
        <Icon name="rocket" size={30} color="#900" />
        <View
          style={{
            borderBottomColor: "#eee",
            borderBottomWidth: 2,
            paddingVertical: 15,
            marginVertical: 15,
          }}
        >
          <Text>Option 1</Text>
          <Text>
            For each country, Arboleda chose a different balloon color. He chose
            the color he believed best represented the country. In India he used
            orange balloons. To Arboleda, orange represented the spices Indian
            cooks used to add taste to food. In Japan he used green balloons.
            The color green represented Japan’s success in developing green
            technology - or technology that is good for the environment. And for
            Kenya, Arboleda chose the color yellow. This was because he loved
            the golden, Kenyan sun.
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "#eee",
            borderBottomWidth: 2,
            paddingVertical: 15,
            marginVertical: 15,
          }}
        >
          <Text>Option 1</Text>
          <Text>
            For each country, Arboleda chose a different balloon color. He chose
            the color he believed best represented the country. In India he used
            orange balloons. To Arboleda, orange represented the spices Indian
            cooks used to add taste to food. In Japan he used green balloons.
            The color green represented Japan’s success in developing green
            technology - or technology that is good for the environment. And for
            Kenya, Arboleda chose the color yellow. This was because he loved
            the golden, Kenyan sun.
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "#eee",
            borderBottomWidth: 2,
            paddingVertical: 15,
            marginVertical: 15,
          }}
        >
          <Text>Option 1</Text>
          <Text>
            For each country, Arboleda chose a different balloon color. He chose
            the color he believed best represented the country. In India he used
            orange balloons. To Arboleda, orange represented the spices Indian
            cooks used to add taste to food. In Japan he used green balloons.
            The color green represented Japan’s success in developing green
            technology - or technology that is good for the environment. And for
            Kenya, Arboleda chose the color yellow. This was because he loved
            the golden, Kenyan sun.
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "#eee",
            borderBottomWidth: 2,
            paddingVertical: 15,
            marginVertical: 15,
          }}
        >
          <Text>Option 1</Text>
          <Text>
            For each country, Arboleda chose a different balloon color. He chose
            the color he believed best represented the country. In India he used
            orange balloons. To Arboleda, orange represented the spices Indian
            cooks used to add taste to food. In Japan he used green balloons.
            The color green represented Japan’s success in developing green
            technology - or technology that is good for the environment. And for
            Kenya, Arboleda chose the color yellow. This was because he loved
            the golden, Kenyan sun.
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "#eee",
            borderBottomWidth: 2,
            paddingVertical: 15,
            marginVertical: 15,
          }}
        >
          <Text>Option 1</Text>
          <Text>
            For each country, Arboleda chose a different balloon color. He chose
            the color he believed best represented the country. In India he used
            orange balloons. To Arboleda, orange represented the spices Indian
            cooks used to add taste to food. In Japan he used green balloons.
            The color green represented Japan’s success in developing green
            technology - or technology that is good for the environment. And for
            Kenya, Arboleda chose the color yellow. This was because he loved
            the golden, Kenyan sun.
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "#eee",
            borderBottomWidth: 2,
            paddingVertical: 15,
            marginVertical: 15,
          }}
        >
          <Text>Option 1</Text>
          <Text>
            For each country, Arboleda chose a different balloon color. He chose
            the color he believed best represented the country. In India he used
            orange balloons. To Arboleda, orange represented the spices Indian
            cooks used to add taste to food. In Japan he used green balloons.
            The color green represented Japan’s success in developing green
            technology - or technology that is good for the environment. And for
            Kenya, Arboleda chose the color yellow. This was because he loved
            the golden, Kenyan sun.
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "#eee",
            borderBottomWidth: 2,
            paddingVertical: 15,
            marginVertical: 15,
          }}
        >
          <Text>Option 1</Text>
          <Text>
            For each country, Arboleda chose a different balloon color. He chose
            the color he believed best represented the country. In India he used
            orange balloons. To Arboleda, orange represented the spices Indian
            cooks used to add taste to food. In Japan he used green balloons.
            The color green represented Japan’s success in developing green
            technology - or technology that is good for the environment. And for
            Kenya, Arboleda chose the color yellow. This was because he loved
            the golden, Kenyan sun.
          </Text>
        </View>
      </Animated.ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default App;
