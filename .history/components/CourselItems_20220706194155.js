import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const { width, height } = Dimensions.get("window");
const CourselItems = () => {
  return (
    <View
      style={[
        tw`mx-2 w-${width - 20} h-${
          height / 3
        } bg-white m-10 shadow-md  opacity-1/2`,
        styles.cardView,
      ]}
    >
      <Image style={tw`w-${width - 20} h-${height / 3} rounded-lg`} />
      <View style={[tw` absolute bottom-10 m-10 left-5`, styles.textView]}>
        <Text style={tw``}>Title</Text>
        <Text style={tw``}>Description</Text>
      </View>
    </View>
  );
};

export default CourselItems;

const styles = StyleSheet.create({});
