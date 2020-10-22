import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Animated,
  StatusBar,
} from "react-native";
import Modal from "react-native-modal";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { HeaderHeightContext } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/AntDesign";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
class HeaderCustom extends Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="left" size={30} color="#fff" style={{ marginLeft: 5 }} />
      </TouchableOpacity>
    );
  }
}
export default class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: new Animated.Value(0),
      isVisible: false,
      height: new Animated.Value(0),
      _scrollY: new Animated.Value(0),
    };
    this.offset = 0;
    this.refs._scrollView;
    this.HEIGHT = Dimensions.get("window").height * 0.3;
    this.refs._scrollY;
    // this.props.navigation.setOptions({
    //   headerLeft: () => <HeaderCustom navigation={this.props.navigation} />,
    // });
  }
  forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 2],
    });

    return {
      titleStyle: { opacity },
      backgroundStyle: { opacity },
    };
  };

  handleScroll = (event) => {
    const { fade } = this.state;
    const { navigation } = this.props;
    //console.log(navigation);

    //console.log(event.nativeEvent.contentOffset);
    var { y } = event.nativeEvent.contentOffset;

    console.log(this.HEIGHT, y, +Dimensions.get("window").height * 0.2);
    if (this.HEIGHT < y + Dimensions.get("window").height * 0.1) {
      // this.HEIGHT = fade.interpolate({
      //   inputRange: [0, 100],
      //   outputRange: [Dimensions.get("window").height * 0.3, 0],
      // });
      ///this.setState({ isVisible: !this.state.isVisible });
      navigation.setOptions({
        headerTransparent: false,
        headerTitle: "Du Cena",
        headerTintColor: "red",
        // headerStyle: {
        //   backgroundColor: this.state.fade.interpolate({
        //     inputRange: [0, 10],
        //     outputRange: ["#ddd", "#fff"],
        //   }),
        // },
      });
      this.offset = y;
    } else {
      //this.setState({ isVisible: !thifas.state.isVisible });
      // alert(1)
      // this.HEIGHT = fade.interpolate({
      //   inputRange: [0, 100],
      //   outputRange: [Dimensions.get("window").height * 0.3, 0],
      //   extrapolate: "clamp",
      // });
      // this.offset = y;
      navigation.setOptions({
        headerTransparent: true,
        headerTitle: null,
        headerTintColor: "#fff",
      });
      // console.log("Height", this.HEIGHT);
      // console.log("Fade", this.state.fade);
    }
  };

  componentDidMount() {
    Animated.timing(this.state.fade, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { isVisible, fade } = this.state;
    // const HEIGHT = fade.interpolate({
    //   inputRange: [0, 2],
    //   outputRange: [Dimensions.get("window").height * 0.3, 0],
    // });
    console.log("Height", this.state._scrollY);
    const { onScroll = () => {} } = this.props;
    return (
      <View
        style={{ flex: 1 }}
        // onStartShouldSetResponder={(event) => {
        //   console.log("event", event.nativeEvent);
        // }}
        // onResponderMove={(event) => {
        //   //alert("1");
        //   console.log("I am moving!", event.nativeEvent);
        // }}
        // onResponderGrant={(event) => {
        //   console.log("event", event.nativeEvent);
        // }}
        // onResponderTerminationRequest={() => true}
        // onStartShouldSetResponder={() => true}
      >
        <StatusBar barStyle="light-content" />
        <ParallaxScrollView
          backgroundColor="#fff"
          stickyHeaderHeight={90}
          onScroll={this.handleScroll}
          parallaxHeaderHeight={Dimensions.get("window").height * 0.3}
          backgroundSpeed={10}
          // renderForeground={() => (
          //   <View>
          //     <Text>Hello</Text>
          //   </View>
          // )}
          // renderStickyHeader={() => (
          //   <View>
          //     <Text>Hello</Text>
          //   </View>
          // )}
          renderBackground={() => (
            <Animated.Image
              resizeMode="cover"
              style={{
                width: Dimensions.get("window").width,
                height: this.HEIGHT,
                justifyContent: "center",
              }}
              source={{
                uri:
                  "https://unku.store/wp-content/uploads/2019/01/basket-beautiful-beauty-opti.jpg",
              }}
            />
          )}
        >
          <Animated.ScrollView
            // pagingEnabled={true}
            //ref={(ref) => (this._scrollY = ref)}
            //scrollEventThrottle
            onScroll={this.handleScroll}
            // onScroll={Animated.event(
            //   [{ nativeEvent: { contentOffset: { y: this.state._scrollY } } }],
            //   { useNativeDriver: true },
            //   {
            //     listener: (event, gestureState) => {
            //       console.log("event", event, gestureState);
            //     },
            //   } // Optional async listener
            // )}
            contentContainerStyle={{}}
            scrollEventThrottle={1}
            onScrollBeginDrag={(event) => {
              //console.log("event", event);
            }}
          >
            <StatusBar
              translucent
              barStyle="dark-content"
              backgroundColor="transparent"
            />

            <View style={styles.view}>
              <Text style={styles.text}>
                This man’s name is Jay. He was part of a video series by
                Momondo, a travel company that had a competition. To join this
                competition people took a DNA test. It showed their genetic
                ancestry. It showed where each person’s family had come from for
                many, many generations. Jay thought the test would show that he
                is 100 percent English - from Great Britain. But he was wrong!
                The test showed that Jay is 55 percent Irish. He is only 30
                percent English. It also showed he is five percent German and
                even a bit Turkish. Jay responded to the results:
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.text}>
                This man’s name is Jay. He was part of a video series by
                Momondo, a travel company that had a competition. To join this
                competition people took a DNA test. It showed their genetic
                ancestry. It showed where each person’s family had come from for
                many, many generations. Jay thought the test would show that he
                is 100 percent English - from Great Britain. But he was wrong!
                The test showed that Jay is 55 percent Irish. He is only 30
                percent English. It also showed he is five percent German and
                even a bit Turkish. Jay responded to the results:
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.text}>
                This man’s name is Jay. He was part of a video series by
                Momondo, a travel company that had a competition. To join this
                competition people took a DNA test. It showed their genetic
                ancestry. It showed where each person’s family had come from for
                many, many generations. Jay thought the test would show that he
                is 100 percent English - from Great Britain. But he was wrong!
                The test showed that Jay is 55 percent Irish. He is only 30
                percent English. It also showed he is five percent German and
                even a bit Turkish. Jay responded to the results:
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.text}>
                This man’s name is Jay. He was part of a video series by
                Momondo, a travel company that had a competition. To join this
                competition people took a DNA test. It showed their genetic
                ancestry. It showed where each person’s family had come from for
                many, many generations. Jay thought the test would show that he
                is 100 percent English - from Great Britain. But he was wrong!
                The test showed that Jay is 55 percent Irish. He is only 30
                percent English. It also showed he is five percent German and
                even a bit Turkish. Jay responded to the results:
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.text}>
                This man’s name is Jay. He was part of a video series by
                Momondo, a travel company that had a competition. To join this
                competition people took a DNA test. It showed their genetic
                ancestry. It showed where each person’s family had come from for
                many, many generations. Jay thought the test would show that he
                is 100 percent English - from Great Britain. But he was wrong!
                The test showed that Jay is 55 percent Irish. He is only 30
                percent English. It also showed he is five percent German and
                even a bit Turkish. Jay responded to the results:
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.text}>
                This man’s name is Jay. He was part of a video series by
                Momondo, a travel company that had a competition. To join this
                competition people took a DNA test. It showed their genetic
                ancestry. It showed where each person’s family had come from for
                many, many generations. Jay thought the test would show that he
                is 100 percent English - from Great Britain. But he was wrong!
                The test showed that Jay is 55 percent Irish. He is only 30
                percent English. It also showed he is five percent German and
                even a bit Turkish. Jay responded to the results:
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.text}>
                This man’s name is Jay. He was part of a video series by
                Momondo, a travel company that had a competition. To join this
                competition people took a DNA test. It showed their genetic
                ancestry. It showed where each person’s family had come from for
                many, many generations. Jay thought the test would show that he
                is 100 percent English - from Great Britain. But he was wrong!
                The test showed that Jay is 55 percent Irish. He is only 30
                percent English. It also showed he is five percent German and
                even a bit Turkish. Jay responded to the results:
              </Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.text}>
                This man’s name is Jay. He was part of a video series by
                Momondo, a travel company that had a competition. To join this
                competition people took a DNA test. It showed their genetic
                ancestry. It showed where each person’s family had come from for
                many, many generations. Jay thought the test would show that he
                is 100 percent English - from Great Britain. But he was wrong!
                The test showed that Jay is 55 percent Irish. He is only 30
                percent English. It also showed he is five percent German and
                even a bit Turkish. Jay responded to the results:
              </Text>
            </View>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.textSafe}>Done</Text>
            </TouchableOpacity>
          </Animated.ScrollView>
        </ParallaxScrollView>

        <Modal
          isVisible={isVisible}
          style={{
            alignSelf: "center",
            position: "absolute",
            bottom: 0,
          }}
        >
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.textSafe}>Done</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginVertical: 20,
    width: Dimensions.get("window").width * 0.95,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
  },
  safe: {
    alignSelf: "center",
    marginBottom: 5,
  },
  touch: {
    backgroundColor: "green",
    paddingVertical: 20,
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 6,
    justifyContent: "center",
  },
  textSafe: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});
