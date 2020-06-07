/**
 * @format
 */
import React from "react";

import { AppRegistry } from "react-native";
//import App from './App';
//import App from "./AnimationDemo";
import "react-native-gesture-handler";
import { name as appName } from "./app.json";
import { backgroundImage } from "./HeaderImage";

//import App from "./UberEats";
import { SafeAreaProvider } from "react-native-safe-area-context";
export const assets = [backgroundImage];
//import App from "./Demo";
//import App from "./Custom";
// import App from "./DemoPallax";
// import App from "./RenderHTML";
//import App from "./Loadmore";
// import App from "./Languea";
// import App from "./ProgressExample";
import App from "./SizeImage";
//import App from './UberEats.ts'
// export const fonts = {
//   UberMoveRegular: require("./assets/UberMoveRegular.ttf"),
//   UberMoveMedium: require("./assets/UberMoveMedium.ttf"),
// };

AppRegistry.registerComponent(appName, () => App);
