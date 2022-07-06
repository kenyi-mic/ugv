import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const { width, heigt } = Dimensions.get("window");
const CourselItems = () => {
  return (
    <View style={tw` `}>
      <Image />
      <Text style={tw`text-black`}>Title</Text>
      <Text>Description</Text>
    </View>
  );
};

export default CourselItems;
