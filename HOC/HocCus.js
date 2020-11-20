import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-animatable";
import Modal from "react-native-modal";
const HOC = (MyComponent) => {
  return class ModalHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false,
      };
    }
    onClose = () => {
      this.setState({ showModal: false });
    };
    onOpen = () => {
      this.setState({ showModal: true });
    };
    render() {
      const { showModal } = this.state;
      return (
        <View>
          <MyComponent
            {...this.props}
            showModal={showModal}
            onClose={this.onClose}
          />
          <TouchableOpacity onPress={this.onOpen}>
            {this.props.children}
          </TouchableOpacity>
        </View>
      );
    }
  };
};

export default HOC;
