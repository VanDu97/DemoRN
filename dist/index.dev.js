"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

require("react-native-gesture-handler");

var _app = require("./app.json");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _DiffClamps = _interopRequireDefault(require("./animation/DiffClamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @format
 */
//import App from './App';
//import App from "./AnimationDemo";
//import App from "./UberEats";
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
_reactNative.AppRegistry.registerComponent(_app.name, function () {
  return _DiffClamps["default"];
});