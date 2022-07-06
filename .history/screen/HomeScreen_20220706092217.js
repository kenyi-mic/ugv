import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-vector-icons";

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";

const HomeScreen = () => {
  const [textInputValue, setTextInputValue] = useState(null);
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={tw`bg-gray-100`}>
        <Image
          style={tw`mx-auto`}
          resizeMode="contain"
          source={{
            width: 320,
            height: 70,
            uri: logo,
          }}
        />
      </View>

      {/*Icons */}
      <View>
        <Icon />
      </View>
      <View style={tw``}>
        <TextInput
          style={tw`w-5/6 mx-auto h-8 bg-gray-50 rounded-lg my-4 border-2 border-blue-200 p-2 `}
          value={textInputValue}
        >
          <Text></Text>
        </TextInput>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
