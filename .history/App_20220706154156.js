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
      <Stack.Navigator>
        <View>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Text style={tw`black`}>Hello world</Text>
        </View>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
