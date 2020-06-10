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

class HeaderCustom extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Text>Hello</Text>
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
    };
    this.offset = 0;
    this.refs._scrollView;
    this.HEIGHT = Dimensions.get("window").height * 0.3;
  }
  handleScroll = (event) => {
    const { fade } = this.state;

    //console.log(event.nativeEvent.contentOffset);
    var { y } = event.nativeEvent.contentOffset;
    if (this.offset > y) {
      this.HEIGHT = fade.interpolate({
        inputRange: [0, 100],
        outputRange: [Dimensions.get("window").height * 0.3, 0],
      });
      ///this.setState({ isVisible: !this.state.isVisible });
      this.offset = y;
    } else {
      //this.setState({ isVisible: !this.state.isVisible });
      // alert(1)
      this.HEIGHT = fade.interpolate({
        inputRange: [0, 100],
        outputRange: [Dimensions.get("window").height * 0.3, 0],
        extrapolate: "clamp",
      });
      this.offset = y;

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
    //console.log("Height", this.HEIGHT);
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
        onResponderGrant={(event) => {
          console.log("event", event.nativeEvent);
        }}
        onResponderTerminationRequest={() => true}
        onStartShouldSetResponder={() => true}
      >
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

        <Animated.ScrollView
          // pagingEnabled={true}
          onScroll={this.handleScroll}
          contentContainerStyle={{}}
          scrollEventThrottle={16}
          onScrollBeginDrag={(event) => {
            //console.log("event", event);
          }}
        >
          {/**  <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="transparent"
          /> */}

          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
        </Animated.ScrollView>

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
