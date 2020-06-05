import React, { Component, PureComponent } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  AppState,
  Image,
} from "react-native";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import { isIphoneX, ifIphoneX } from "react-native-iphone-x-helper";
import VectorIcon from "../../utils/vectors";
import AwesomeAlert from "react-native-awesome-alerts";
import Headers from "./header";
//import OurPackages from './ourPackage';
//import TopDestination from './topDestination/TopDestination';
import JWidget from "../../components/jwidget";
import { sizeHeight, sizeWidth, sizeFont } from "../../helpers/size.helper";
import Loader from "react-native-easy-content-loader";
import { textSize } from "../../utils/constant/font";
import Icon from "react-native-vector-icons/FontAwesome5Pro";
import { connect } from "react-redux";
import Modal from "react-native-modal";
import AlertDesignNotification from "../../components/alert/AlertDesignNotification";
import {
  Provider,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from "react-native-paper";
import NetWorkOffline from "../../components/network";
import { loginWithToken, getCountryFromIp } from "../../actions/authAction";
import { changeCodeNumber } from "../../actions/loginAction";
import { netwrokConnected } from "../../actions/networkAction";
//import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";
import { COLOR, COLOR_LAZY_LOADING } from "../../utils/constant/color";
import ContentLoader from "react-native-easy-content-loader";
import { _retrieveData } from "../../utils/asynStorage";
import { TOKEN } from "../../utils/asynStorage/store";
import dataCodeNumberPhone from "../../utils/codeNumberPhone/dataCodeNumberPhone";
import Loading from "../../components/loading";
import WS from "../../components/ws";
import { changeStatusMess, unreadMess } from "../../actions/messageAction";
//import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { listConversations } from "../../service/messages";
import stylesHome from "../../styles/home";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { lang } from "../../language";
import moment from "moment";
const PARALLAX_HEADER_HEIGHT = sizeHeight(40);
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      loading: true,
      showModal: false,
    };
    // this.ws = new WS();
  }

  render() {
    console.log(this.props);
    const { onScroll = () => {} } = this.props;

    return (
      <View>
        <ParallaxScrollView
          backgroundColor="#fff"
          onScroll={onScroll}
          stickyHeaderHeight={90}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
          backgroundSpeed={10}
          renderForeground={() => (
            <View>
              <Text>Hello</Text>
            </View>
          )}
          renderStickyHeader={() => (
            <View>
              <Text>Hello</Text>
            </View>
          )}
          renderBackground={() => (
            <View>
              <Text>Hello</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const window = Dimensions.get("window");

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = sizeHeight(40);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
