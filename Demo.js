import React from "react";
import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import ParallaxScrollView from "react-native-parallax-scrollview";
import Icon from "react-native-vector-icons/FontAwesome";
class Demo extends React.PureComponent {
  // Inside of a component's render() method:
  handleScroll = (e) => {
    console.log("scrolling position y");
  };
  render() {
    const {
      onScroll = (e) => {
        console.log("scrolling");
      },
    } = this.props;
    return (
      <ParallaxScrollView
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          console.log("layout parallax", layout);
        }}
        onScroll={(e) => {
          console.log("ooooooooooo");
        }}
        scrollEventThrottle={16}
        windowHeight={400}
        backgroundSource={{ uri: "http://i.imgur.com/s4JEY9E.jpg" }}
        navBarTitle={""}
        navBarTitleColor="black"
        navBarColor="#fff"
        navBarHeight={65}
        // navBarView={
        //   <SafeAreaView>
        //     <Text>Header</Text>
        //   </SafeAreaView>
        // }
        headerView={
          <View>
            <Text>My App</Text>
            <Text>Custom Header View</Text>
          </View>
          // </ImageBackground>
        }
        // leftIcon={{
        //   name: "rocket",
        //   color: "rgba(228, 117, 125, 1)",
        //   size: 30,
        //   type: "font-awesome",
        // }}
        // leftIconOnPress={() =>
        //   this.setState({ index: (this.state.index + 1) % 3 })
        // }
        // rightIcon={{
        //   name: "user",
        //   color: "rgba(228, 117, 125, 1)",
        //   size: 30,
        //   type: "font-awesome",
        // }}
        // rightIconOnPress={() =>
        //   this.setState({ index: (this.state.index + 1) % 3 })
        // }
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          style={{ flex: 1, backgroundColor: "rgba(228, 117, 125, 1)" }}
          showsVerticalScrollIndicator={false}
          onScroll={(e) => {
            console.log("ooooooooooo", e);
          }}
          scrollEventThrottle={16}
        >
          <View
            style={{
              height: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
              console.log("layout view1", layout);
            }}
          >
            <Text style={{ fontSize: 32, color: "white" }}>Custom view</Text>
          </View>
          <View
            style={{
              height: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
              console.log("layout view2", layout);
            }}
          >
            <Text style={{ fontSize: 32, color: "white" }}>keep going.</Text>
          </View>
          <View
            style={{
              height: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 32, color: "white" }}>keep going..</Text>
          </View>
          <View
            style={{
              height: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 32, color: "white" }}>keep going...</Text>
          </View>
          <View
            style={{
              height: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 32, color: "white" }}>the end! :)</Text>
          </View>
        </ScrollView>
      </ParallaxScrollView>
    );
  }
}

export default Demo;
