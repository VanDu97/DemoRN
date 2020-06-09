/**
 * @format
 */
import React from "react";

import { AppRegistry } from "react-native";
//import App from './App';
//import App from "./AnimationDemo";
import "react-native-gesture-handler";
import { name as appName } from "./app.json";

//import App from "./UberEats";
import { SafeAreaProvider } from "react-native-safe-area-context";

//import App from "./Demo";
//import App from "./Custom";
// import App from "./DemoPallax";
// import App from "./RenderHTML";
//import App from "./Loadmore";
// import App from "./Languea";
// import App from "./ProgressExample";
// import App from "./SizeImage";
//import App from './UberEats.ts'
// import App from "./Navigation/DemoStackNavigation";
import App from "./animation/HelloAppAnimation";
//import App from "./Video/index";
// export const fonts = {
//   UberMoveRegular: require("./assets/UberMoveRegular.ttf"),
//   UberMoveMedium: require("./assets/UberMoveMedium.ttf"),
// };

AppRegistry.registerComponent(appName, () => App);
