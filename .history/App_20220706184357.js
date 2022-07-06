import { View, KeyboardAvoidingView, Text } from "react-native";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "twrnc";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View>
      <HomeScreen />
    </View>
  );
};

export default App;
