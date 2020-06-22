import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
  Dimensions,
} from "react-native";

export default class DemoScroll extends Component {
  constructor(props) {
    super(props);
    this._option;
    this.refs._review;
    this.refs.flatList;
    this.refs.scroll;
  }
  render() {
    return (
      <ScrollView ref={(ref) => (this.scroll = ref)}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <TouchableOpacity
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            this.scroll.scrollTo({
              x: 0,
              y: this._option,
              animated: true,
            });
          }}
        >
          <Text>TOUCH</Text>
        </TouchableOpacity>
        <View style={styles.view}>
          <Text style={styles.textTitle}>Package Options</Text>
          <Text style={styles.text}>
            This man’s name is Jay. He was part of a video series by Momondo, a
            travel company that had a competition. To join this competition
            people took a DNA test. It showed their genetic ancestry. It showed
            where each person’s family had come from for many, many generations.
            Jay thought the test would show that he is 100 percent English -
            from Great Britain. But he was wrong! The test showed that Jay is 55
            percent Irish. He is only 30 percent English. It also showed he is
            five percent German and even a bit Turkish. Jay responded to the
            results:This man’s name is Jay. He was part of a video series by
            Momondo, a travel company that had a competition. To join this
            competition people took a DNA test. It showed their genetic
            ancestry. It showed where each person’s family had come from for
            many, many generations. Jay thought the test would show that he is
            100 percent English - from Great Britain. But he was wrong! The test
            showed that Jay is 55 percent Irish. He is only 30 percent English.
            It also showed he is five percent German and even a bit Turkish. Jay
            responded to the results:This man’s name is Jay. He was part of a
            video series by Momondo, a travel company that had a competition. To
            join this competition people took a DNA test. It showed their
            genetic ancestry. It showed where each person’s family had come from
            for many, many generations. Jay thought the test would show that he
            is 100 percent English - from Great Britain. But he was wrong! The
            test showed that Jay is 55 percent Irish. He is only 30 percent
            English. It also showed he is five percent German and even a bit
            Turkish. Jay responded to the results:
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.textTitle}>Add To Your Trip</Text>
          <Text style={styles.text}>
            This man’s name is Jay. He was part of a video series by Momondo, a
            travel company that had a competition. To join this competition
            people took a DNA test. It showed their genetic ancestry. It showed
            where each person’s family had come from for many, many generations.
            Jay thought the test would show that he is 100 percent English -
            from Great Britain. But he was wrong! The test showed that Jay is 55
            percent Irish. He is only 30 percent English. It also showed he is
            five percent German and even a bit Turkish. Jay responded to the
            results:This man’s name is Jay. He was part of a video series by
            Momondo, a travel company that had a competition. To join this
            competition people took a DNA test. It showed their genetic
            ancestry. It showed where each person’s family had come from for
            many, many generations. Jay thought the test would show that he is
            100 percent English - from Great Britain. But he was wrong! The test
            showed that Jay is 55 percent Irish. He is only 30 percent English.
            It also showed he is five percent German and even a bit Turkish. Jay
            responded to the results:This man’s name is Jay. He was part of a
            video series by Momondo, a travel company that had a competition. To
            join this competition people took a DNA test. It showed their
            genetic ancestry. It showed where each person’s family had come from
            for many, many generations. Jay thought the test would show that he
            is 100 percent English - from Great Britain. But he was wrong! The
            test showed that Jay is 55 percent Irish. He is only 30 percent
            English. It also showed he is five percent German and even a bit
            Turkish. Jay responded to the results:
          </Text>
        </View>
        <View
          style={styles.view}
          onLayout={(event) => {
            //console.log(event.nativeEvent);
            this._option = event.nativeEvent.layout.y;
            console.log(this._option);
          }}
        >
          <Text style={styles.textTitle}>Reviews</Text>
          <Text style={styles.text}>
            This man’s name is Jay. He was part of a video series by Momondo, a
            travel company that had a competition. To join this competition
            people took a DNA test. It showed their genetic ancestry. It showed
            where each person’s family had come from for many, many generations.
            Jay thought the test would show that he is 100 percent English -
            from Great Britain. But he was wrong! The test showed that Jay is 55
            percent Irish. He is only 30 percent English. It also showed he is
            five percent German and even a bit Turkish. Jay responded to the
            results:This man’s name is Jay. He was part of a video series by
            Momondo, a travel company that had a competition. To join this
            competition people took a DNA test. It showed their genetic
            ancestry. It showed where each person’s family had come from for
            many, many generations. Jay thought the test would show that he is
            100 percent English - from Great Britain. But he was wrong! The test
            showed that Jay is 55 percent Irish. He is only 30 percent English.
            It also showed he is five percent German and even a bit Turkish. Jay
            responded to the results:This man’s name is Jay. He was part of a
            video series by Momondo, a travel company that had a competition. To
            join this competition people took a DNA test. It showed their
            genetic ancestry. It showed where each person’s family had come from
            for many, many generations. Jay thought the test would show that he
            is 100 percent English - from Great Britain. But he was wrong! The
            test showed that Jay is 55 percent Irish. He is only 30 percent
            English. It also showed he is five percent German and even a bit
            Turkish. Jay responded to the results:
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.textTitle}>Things To Note</Text>
          <Text style={styles.text}>
            This man’s name is Jay. He was part of a video series by Momondo, a
            travel company that had a competition. To join this competition
            people took a DNA test. It showed their genetic ancestry. It showed
            where each person’s family had come from for many, many generations.
            Jay thought the test would show that he is 100 percent English -
            from Great Britain. But he was wrong! The test showed that Jay is 55
            percent Irish. He is only 30 percent English. It also showed he is
            five percent German and even a bit Turkish. Jay responded to the
            results:This man’s name is Jay. He was part of a video series by
            Momondo, a travel company that had a competition. To join this
            competition people took a DNA test. It showed their genetic
            ancestry. It showed where each person’s family had come from for
            many, many generations. Jay thought the test would show that he is
            100 percent English - from Great Britain. But he was wrong! The test
            showed that Jay is 55 percent Irish. He is only 30 percent English.
            It also showed he is five percent German and even a bit Turkish. Jay
            responded to the results:This man’s name is Jay. He was part of a
            video series by Momondo, a travel company that had a competition. To
            join this competition people took a DNA test. It showed their
            genetic ancestry. It showed where each person’s family had come from
            for many, many generations. Jay thought the test would show that he
            is 100 percent English - from Great Britain. But he was wrong! The
            test showed that Jay is 55 percent Irish. He is only 30 percent
            English. It also showed he is five percent German and even a bit
            Turkish. Jay responded to the results:
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.textTitle}>Location</Text>
          <Text style={styles.text}>
            This man’s name is Jay. He was part of a video series by Momondo, a
            travel company that had a competition. To join this competition
            people took a DNA test. It showed their genetic ancestry. It showed
            where each person’s family had come from for many, many generations.
            Jay thought the test would show that he is 100 percent English -
            from Great Britain. But he was wrong! The test showed that Jay is 55
            percent Irish. He is only 30 percent English. It also showed he is
            five percent German and even a bit Turkish. Jay responded to the
            results:This man’s name is Jay. He was part of a video series by
            Momondo, a travel company that had a competition. To join this
            competition people took a DNA test. It showed their genetic
            ancestry. It showed where each person’s family had come from for
            many, many generations. Jay thought the test would show that he is
            100 percent English - from Great Britain. But he was wrong! The test
            showed that Jay is 55 percent Irish. He is only 30 percent English.
            It also showed he is five percent German and even a bit Turkish. Jay
            responded to the results:This man’s name is Jay. He was part of a
            video series by Momondo, a travel company that had a competition. To
            join this competition people took a DNA test. It showed their
            genetic ancestry. It showed where each person’s family had come from
            for many, many generations. Jay thought the test would show that he
            is 100 percent English - from Great Britain. But he was wrong! The
            test showed that Jay is 55 percent Irish. He is only 30 percent
            English. It also showed he is five percent German and even a bit
            Turkish. Jay responded to the results:
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.textTitle}>About This Activity</Text>
          <Text style={styles.text}>
            This man’s name is Jay. He was part of a video series by Momondo, a
            travel company that had a competition. To join this competition
            people took a DNA test. It showed their genetic ancestry. It showed
            where each person’s family had come from for many, many generations.
            Jay thought the test would show that he is 100 percent English -
            from Great Britain. But he was wrong! The test showed that Jay is 55
            percent Irish. He is only 30 percent English. It also showed he is
            five percent German and even a bit Turkish. Jay responded to the
            results:This man’s name is Jay. He was part of a video series by
            Momondo, a travel company that had a competition. To join this
            competition people took a DNA test. It showed their genetic
            ancestry. It showed where each person’s family had come from for
            many, many generations. Jay thought the test would show that he is
            100 percent English - from Great Britain. But he was wrong! The test
            showed that Jay is 55 percent Irish. He is only 30 percent English.
            It also showed he is five percent German and even a bit Turkish. Jay
            responded to the results:This man’s name is Jay. He was part of a
            video series by Momondo, a travel company that had a competition. To
            join this competition people took a DNA test. It showed their
            genetic ancestry. It showed where each person’s family had come from
            for many, many generations. Jay thought the test would show that he
            is 100 percent English - from Great Britain. But he was wrong! The
            test showed that Jay is 55 percent Irish. He is only 30 percent
            English. It also showed he is five percent German and even a bit
            Turkish. Jay responded to the results:
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: Dimensions.get("window").width * 0.95,
    alignSelf: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
