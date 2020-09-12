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
  TextInput,
  SectionList,
  LayoutAnimation,
  UIManager,
  Animated,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
// import Animated, {
//   Easing,
//   useAnimatedScrollHandler,
// } from "react-native-reanimated";

const HEADER_MAX_HEIGHT = 90;
const HEADER_MIN_HEIGHT = 90;
const PROFILE_MAX_HEADER = 80;
const PROFILE_MIN_HEADER = 40;
const Stack = createStackNavigator();
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
    id: "1",
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    id: "2",
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
    id: "3",
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
    id: "4",
  },
  {
    title: "Main dishes two",
    data: ["Pizza", "Burger", "Risotto"],
    id: "5",
  },
  {
    title: "Sides three",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    id: "6",
  },
  {
    title: "Drinks four",
    data: ["Water", "Coke", "Beer"],
    id: "7",
  },
  {
    title: "Desserts five",
    data: ["Cheese Cake", "Ice Cream"],
    id: "8",
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      refreshing: false,
      name: "",
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp",
    });
    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 50,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 100,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 150,
      ],
      outputRange: [HEADER_MAX_HEIGHT, 50, 20, 0, -100],
      extrapolate: "clamp",
    });
    const profileMarginTop = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 50,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 100,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 150,
      ],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_MAX_HEADER / 2,
        HEADER_MAX_HEIGHT,
        HEADER_MAX_HEIGHT,
        HEADER_MAX_HEIGHT,
        HEADER_MAX_HEIGHT,
      ],
      extrapolate: "clamp",
    });
    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [1, 2],
      extrapolate: "clamp",
    });
    const headerTitle = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 50,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 120,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 200,
      ],
      outputRange: [-100, -70, -45, -10, 5],
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
    const opacitys = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 50,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 100,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + PROFILE_MIN_HEADER + 150,
      ],
      outputRange: [0, 0, 0, 0.1, 1],
      extrapolate: "clamp",
    });
    const headerZindexTitle = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [1, -2],
      extrapolate: "clamp",
    });
    const { name } = this.state;
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="lightskyblue"
          translucent
        />
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
          <Animated.View
            style={{
              marginTop: profileMarginTop,
              flexDirection: "row",
              justifyContent: "space-between",
              width: Dimensions.get("window").width,
              zIndex: headerZindexTitle,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingHorizontal: 15,
              }}
            >
              Sản phẩm Babu
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ paddingHorizontal: 15 }}
                onPress={() => {
                  alert("dot");
                }}
              >
                <Icon name="ellipsis-v" type="font-awesome" color="#f50" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingHorizontal: 15 }}
                onPress={() => {
                  alert("trash");
                }}
              >
                <Icon name="trash" type="font-awesome" color="red" />
              </TouchableOpacity>
            </View>
          </Animated.View>
          <Animated.View
            style={{
              position: "absolute",
              bottom: headerTitle,
              opacity: opacitys,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: Dimensions.get("window").width * 0.96,
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#000"
                placeholder="User name"
                value={name}
                onChangeText={() => this.setState({ name: text })}
              />
              <Icon
                raised
                name="heartbeat"
                type="font-awesome"
                color="#f50"
                onPress={() => alert("hello 1")}
              />
            </View>
          </Animated.View>
        </Animated.View>
        <Animated.View style={{ marginTop: profileImageHeight }}>
          <View style={{ backgroundColor: "#fff" }}>
            <Animated.View style={[styles.headers]}>
              <TouchableOpacity>
                <Animated.Image
                  source={{ uri: "https://source.unsplash.com/random" }}
                  style={[styles.backgroundImage]}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Animated.Image
                  source={{ uri: "https://source.unsplash.com/random" }}
                  style={[styles.backgroundImage]}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Animated.Image
                  source={{ uri: "https://source.unsplash.com/random" }}
                  style={[styles.backgroundImage]}
                />
              </TouchableOpacity>
            </Animated.View>
            <View
              style={{
                flexDirection: "row",
                width: Dimensions.get("window").width * 0.96,
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#000"
                placeholder="User name"
              />
              <Icon
                raised
                name="heartbeat"
                type="font-awesome"
                color="#f50"
                onPress={() => alert("hello 10")}
              />
            </View>
          </View>
        </Animated.View>
        <View style={{ marginTop: 10 }}>
          <Animated.SectionList
            stickySectionHeadersEnabled
            scrollEventThrottle={1}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
              {
                useNativeDriver: false,
                listener: (text) => {
                  //LayoutAnimation.linear();
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                },
              }
            )}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <View
                style={{
                  width: Dimensions.get("window").width,
                  paddingHorizontal: 20,
                  backgroundColor: "#ddd",
                  paddingVertical: 10,
                }}
              >
                <Text style={styles.header}>{title}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
// export default class PallaxSection extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showAlert: false,
//       loading: true,
//       showModal: false,
//     };
//     // this.ws = new WS();
//   }

//   render() {
//     console.log(this.props);
//     const { onScroll = () => {} } = this.props;

//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#000",
    width: Dimensions.get("window").width * 0.8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  touch: {
    paddingVertical: 15,
    width: Dimensions.get("window").width * 0.96,
    backgroundColor: "red",
    marginVertical: 15,
    borderRadius: 6,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "skyblue",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
  },
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.96,
    alignSelf: "center",
    marginTop: 10,
  },
  backgroundImage: {
    width: Dimensions.get("window").width * 0.3,
    height: 100,
    borderRadius: 10,
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
  },
});
