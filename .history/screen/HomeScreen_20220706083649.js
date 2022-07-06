import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";

const logo = "https://ugv.edu.bd/images/webimage/ugv-logo.png";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.logo}>
        <Image
          style={tw`mx-auto`}
          resizeMode="contain"
          source={{
            width: 320,
            height: 100,
            uri: logo,
          }}
        />
      </View>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {},
});
