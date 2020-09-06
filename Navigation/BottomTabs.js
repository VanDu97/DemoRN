import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Home";
import ScreenOne from "./ScreenOne";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Icon } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
//const Tab = createMaterialTopTabNavigator();
//const Tab = createMaterialBottomTabNavigator();
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }
// const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={MyBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createDrawerNavigator();

function MyBottomTabs() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{
        showIcon: true,
        iconStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        labelStyle: { textTransform: "none" },
      }}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color }) => {
      //     console.log(route, focused, "1001010");
      //     let iconName;
      //     if (route.name === "Home") {
      //       return (
      //         <Icon
      //           raised
      //           name="heartbeat"
      //           type="font-awesome"
      //           color="#f50"
      //           onPress={() => console.log("hello")}
      //         />
      //       );
      //     } else if (route.name == "Settings") {
      //       return (
      //         <Icon
      //           raised
      //           name="heartbeat"
      //           type="font-awesome"
      //           color="green"
      //           onPress={() => console.log("hello")}
      //         />
      //       );
      //     }
      //   },
      // })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={ScreenOne} />
    </Tab.Navigator>
  );
}

export default MyStack;
