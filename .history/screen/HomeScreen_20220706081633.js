import {
  Platform,
  SafeAreaViewBase,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";

const HomeScreen = () => {
  return (
    <SafeAreaViewBase>
      <Text>HomeScreen</Text>
    </SafeAreaViewBase>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    narginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
