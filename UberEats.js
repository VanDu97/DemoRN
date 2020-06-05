import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import HeaderImage from "./HeaderImage";
import Content, { defaultTabs } from "./Content";
import Header from "./Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default (UberEats = () => {
  const [tabs, setTabs] = useState(defaultTabs);
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <HeaderImage />
        <ScrollView style={StyleSheet.absoluteFill} scrollEventThrottle={1}>
          <Content
            onMeasurement={(index, tab) => {
              tabs[index] = tab;
              setTabs([...tabs]);
            }}
          />
        </ScrollView>
        <Header {...{ tabs }} />
      </View>
    </SafeAreaProvider>
  );
});
