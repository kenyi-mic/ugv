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
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          style={tw`flex-1`}
          keyboardVerticalOffset={Platform.OS === "android" ? 0 : -64}
        >
          <Stack.Navigator>
            <View>
              <Stack.Screen name="Home" component={HomeScreen} />
            </View>
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
