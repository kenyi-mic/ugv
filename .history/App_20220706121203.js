import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <View>
      <HomeScreen />
    </View>
  );
}
