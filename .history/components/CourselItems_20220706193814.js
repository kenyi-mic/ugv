import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const { width, heigt } = Dimensions.get("window");
console.log(width);
const CourselItems = () => {
  return (
    <View
      style={[
        tw`mx-2 -w-20 h-1/3 bg-white m-10 shadow-md  opacity-1/2`,
        styles.container,
      ]}
    >
      <Image style={tw`w-${width - 20} h-${heigt / 3} rounded-lg`} />
      <View style={[tw` absolute bottom-10 m-10 left-5`, styles.textView]}>
        <Text style={tw``}>Title</Text>
        <Text style={tw``}>Description</Text>
      </View>
    </View>
  );
};

export default CourselItems;

const styles = StyleSheet.create({});
