import { Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";

const App = () => {
  return (
    <View>
      <HomeScreen />
    </View>
  );
};

export default App;
