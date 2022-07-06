import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
