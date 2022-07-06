import { View, KeyboardAvoidingView } from "react-native";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <View>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Text>Hello world</Text>
        </View>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
