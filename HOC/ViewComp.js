import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
export default class ViewComp extends Component {
  render() {
    const { showModal, onClose } = this.props;
    return (
      <Modal
        isVisible={showModal}
        onBackButtonPress={onClose}
        onBackdropPress={onClose}
        style={{ margin: 0 }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderRadius: 6,
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text>Hello 100</Text>
          <Text>Hello 100</Text>
          <Text>Hello 100</Text>
          <TouchableOpacity onPress={() => alert("Pressed!")}>
            <Text>Press Me!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
