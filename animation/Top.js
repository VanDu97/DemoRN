import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Component } from "react";
import TabTop from "../Scroll/TabTop";
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Animated,
  LayoutAnimation,
  UIManager,
  Platform,
  RefreshControl,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  render() {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
    return (
      <ScrollView
        scrollEventThrottle={16}
        bounces={false}
        onScrollEndDrag={(event) => {
          console.log("event", event.nativeEvent);
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.props.scrollY } } }],
          {
            listener: (event) => {
              // LayoutAnimation.linear();
            },
            useNativeDriver: false,
          } // Optional async listener
        )}
      >
        <View
          style={{
            backgroundColor: "#ddd",
            width: Dimensions.get("window").width,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 3, 3, 3, 5, 10].map(
            (item, index) => {
              return (
                <View
                  style={{
                    width: "95%",
                    borderWidth: 1,
                    alignSelf: "center",
                    borderColor: "#ddd",
                    paddingVertical: 60,
                    paddingHorizontal: 15,
                    borderRadius: 6,
                    marginTop: 15,
                    backgroundColor: "#fff",
                    marginBottom: index === 16 ? 15 : 0,
                  }}
                  key={index}
                >
                  <Text>{item} </Text>
                </View>
              );
            }
          )}
        </View>
      </ScrollView>
    );
  }
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Top(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab1">
          {(navigation) => <HomeScreen {...props} {...navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Tab2" component={SettingsScreen} />
        <Tab.Screen name="Tab3" component={TabTop} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
