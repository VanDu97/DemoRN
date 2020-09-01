import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text } from "react-native-animatable";
import Item from "./Item";

export default class Performance extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        var result = response.json();

        result
          .then((result) => {
            //console.log("111", result);
            this.setState({ data: result });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((json) => console.log(json));
  }
  handleData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        var result = response.json();

        result
          .then((result) => {
            //console.log("111", result);
            this.setState({ data: result });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((json) => console.log(json));
  };
  render() {
    const { data } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return <Item item={item} handleData={this.handleData} />;
          }}
          ListEmptyComponent={() => (
            <View>
              <Text>Hello</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
