import { View } from "react-native";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import { createStackNavigation } from "@react-navigation/native-Stack";

const Stack = createStackNavigation();

const App = () => {
  return (
    <View>
      <HomeScreen />
    </View>
  );
};

export default App;
