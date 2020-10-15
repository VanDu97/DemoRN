import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Text } from "react-native";

const LifeComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count", count);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textCount}>{count} </Text>
      </View>
      <View style={styles.viewTouch}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.text}>Plus</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.text}>Nagative</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  touch: {
    backgroundColor: "#897779",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 4,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  viewTouch: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.96,
  },
  textCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default LifeComponent;
