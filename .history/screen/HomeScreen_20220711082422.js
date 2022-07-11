import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "../components/Icons";

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

      <Icons />
      <View
        style={tw`w-5/6 mx-auto h-10 rounded-lg my-4 border-2 border-blue-200 p-2 flex flex-row items-center`}
      >
        <Icon
          name="search"
          type="fontawesome"
          size={18}
          color="black"
          style={tw`w-5`}
        />
        <TextInput
          style={tw`w-5/6 `}
          value={textInputValue}
          setTextInputValue={() => value}
        ></TextInput>
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
