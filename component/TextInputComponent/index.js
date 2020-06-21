import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";
const isEmail = function(props, propName, componentName) {
  const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;
  console.log(props);
  if (!regex.test(props[propName])) {
    return new Error(
      "Invalid prop propName passed to componentName. Expected a valid email address."
    );
  }
};
class TextInputComponents extends Component {
  constructor(props) {
    super(props);
  }
  prototype = {
    placeholder: PropTypes.string.isRequired,
  };
  render() {
    const {
      style,
      placeholder,
      optionalSymbol,
      node,
      element,
      email,
    } = this.props;
    // alert(placeholder);
    console.log(this.props);
    return (
      <View style={style}>
        <TextInput onChangeText={() => null} placeholder={placeholder} />
        {element}
      </View>
    );
  }
}

// TextInputComponents.prototype = {
//   placeholder: PropTypes.string,
// };

TextInputComponents.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  optionalSymbol: PropTypes.symbol.isRequired,
  node: PropTypes.node.isRequired,
  element: PropTypes.element.isRequired,
  email: isEmail,
};
TextInputComponents.defaultProps = {
  onChangeText: () => {},
  placeholder: "Hello Mother",
};
export default TextInputComponents;
