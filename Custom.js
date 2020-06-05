import React, { Component } from "react";
import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ParallaxScrollView from "react-native-parallax-scroll-view";

class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        "Simplicity Matters",
        "Hammock Driven Development 1900",
        "Value of Values",
        "Are We There Yet?",
        "The Language of the System",
        "Design, Composition, and Performance",
        "Clojure core.async",
        "The Functional Database",
        "Deconstructing the Database",
        "Hammock Driven Development22",
        "Value of Values 3",
        "Simplicity Matter s",
        "Hammock Driven Development 1",
        "Value of Values 2",
        "Are We There Yet?3",
        "The Language of the System3",
        "Design, Composition, and Performance4",
        "Clojure core.async4",
        "The Functional Database3",
        "Deconstructing the Database3",
        "Hammock Driven Development4",
        "Value of Values3",
      ],
    };
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ParallaxScrollView
          backgroundColor="#fff"
          onScroll={onScroll}
          headerBackgroundColor="#fff"
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
          backgroundSpeed={10}
          renderBackground={() => (
            <View key="background">
              <Image
                source={{
                  uri: "https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg",
                  width: window.width,
                  height: PARALLAX_HEADER_HEIGHT,
                }}
              />
            </View>
          )}
          // renderForeground={() => (
          //   <View key="parallax-header" style={styles.parallaxHeader}>
          //     <Image
          //       style={styles.avatar}
          //       source={{
          //         uri:
          //           "https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg",
          //         width: AVATAR_SIZE,
          //         height: AVATAR_SIZE,
          //       }}
          //     />
          //     <Text style={styles.sectionSpeakerText}>
          //       Talks by Rich Hickey
          //     </Text>
          //     <Text style={styles.sectionTitleText}>
          //       CTO of Cognitec, Creator of Clojure
          //     </Text>
          //   </View>
          // )}
          renderStickyHeader={() => (
            <TouchableOpacity key="sticky-header" style={styles.stickySection}>
              <Icon name="search" size={30} color={"#ccc"} />
            </TouchableOpacity>
          )}
        >
          <View>
            <Text>
              During his life, Dickens published 15 books, and hundreds of short
              stories. He also continued his work as a news reporter. Everyone
              in England knew Charles Dickens. He was a famous celebrity. People
              even paid money to see him read the most exciting parts of his
              books. And people bought many, many copies of his books.
            </Text>
          </View>
          <View>
            <Text>
              During his life, Dickens published 15 books, and hundreds of short
              stories. He also continued his work as a news reporter. Everyone
              in England knew Charles Dickens. He was a famous celebrity. People
              even paid money to see him read the most exciting parts of his
              books. And people bought many, many copies of his books.
            </Text>
          </View>
          <View>
            <Text>
              During his life, Dickens published 15 books, and hundreds of short
              stories. He also continued his work as a news reporter. Everyone
              in England knew Charles Dickens. He was a famous celebrity. People
              even paid money to see him read the most exciting parts of his
              books. And people bought many, many copies of his books.
            </Text>
          </View>
        </ParallaxScrollView>
      </View>
    );
  }
}

const window = Dimensions.get("window");

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: Dimensions.get("window").width,
    borderWidth: 1,
    borderColor: "#eee",
  },
  stickySectionText: {
    color: "#000",
    fontSize: 20,
    margin: 10,
  },
  fixedSection: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  fixedSectionText: {
    color: "#999",
    fontSize: 20,
  },
  parallaxHeader: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    paddingTop: 100,
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2,
  },
  sectionSpeakerText: {
    color: "white",
    fontSize: 24,
    paddingVertical: 5,
  },
  sectionTitleText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 5,
  },
  row: {
    overflow: "hidden",
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  rowText: {
    fontSize: 20,
  },
});

export default Custom;
