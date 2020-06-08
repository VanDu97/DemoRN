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
} from "react-native";
import Modal from "react-native-modal";

export default class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: new Animated.Value(1),
      isVisible: false,
    };
    this.offset = 0;
    this.refs._scrollView;
  }
  handleScroll = (event) => {
    //console.log(event.nativeEvent.contentOffset);
    // var { y } = event.nativeEvent.contentOffset;
    // if (this.offset > y) {
    //   //   this.state.fade.interpolate({
    //   //     inputRange: [1,0.5,0],
    //   //     outputRange: [0,0.5,1],
    //   //   });
    //   this.setState({ isVisible: !this.state.isVisible });
    //   this.offset = y;
    // } else {
    //   this.setState({ isVisible: !this.state.isVisible });
    //   this.offset = y;
    // }
  };
  render() {
    const { isVisible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
         // pagingEnabled={true}
          onScroll={this.handleScroll}
          onScrollBeginDrag={(event) => {
            console.log("event", event);
          }}
        >
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
        </ScrollView>

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
