import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const { width, heigt } = Dimensions.get("window");
const CourselItems = () => {
  return (
    <View
      style={tw`mx-2 flex-1 flex h-1/3 bg-white m-10 shadow-md  opacity-1/2 `}
    >
      <Image />
      <Text style={tw`text-black`}>Title</Text>
      <Text>Description</Text>
    </View>
  );
};

export default CourselItems;
