import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
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
