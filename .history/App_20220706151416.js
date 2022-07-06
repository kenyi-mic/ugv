import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          style={tw`flex-1`}
          keyboardVerticalOffset={Platform.OS === "android" ? 0 : -64}
        >
          <View>
            <HomeScreen />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
