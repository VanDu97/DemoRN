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
//import App from "./DemoPallax";
//import App from "./images/ZoomImages";
//import App from "./Scroll/DemoScroll";
// import App from "./RenderHTML";
//import App from "./Loadmore";
// import App from "./Languea";
// import App from "./ProgressExample";
//import App from "./images/SizeImage";
//import App from './UberEats.ts'
//import App from "./Navigation/DemoStackNavigation";
//import App from "./animation/HelloAppAnimation";
// import App from "./animation/AnimationDemo";
//import App from "./Video/index";
// export const fonts = {
//   UberMoveRegular: require("./assets/UberMoveRegular.ttf"),
//   UberMoveMedium: require("./assets/UberMoveMedium.ttf"),
// };
//import App from "./images/ScrollImage";
//import App from "./animation/TransformAnimation";
//import App from "./animation/PanGesture";
//import App from "./TestLifeCycle";
//import App from "./animation/animationcodedaily/index";
//import App from "./animation/ScrollImageHori";
//import App from "./animation/animationcodedaily/Easings";
//import App from "./animation/animationcodedaily/KittenCard";
// import App from "./animation/DiffClamps";
// import App from "./notification/index";
//import App from "./Performance/index";
// import App from "./Navigation/BottomTabs";
//import App from "./Navigation/Home";
// import App from "./pan/index";
import App from "./shot/index";
AppRegistry.registerComponent(appName, () => App);
