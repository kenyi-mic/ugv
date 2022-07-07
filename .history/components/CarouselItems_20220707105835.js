import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const { width, height } = Dimensions.get("window");

const CarouselItems = () => {
  return (
    <View style={[tw`mx-auto my-10`, styles.cardView]}>
      <Image style={tw`w-${width - 20} h-${height / 3} `} />
      <View style={[tw``, styles.textView]}>
        <Text style={tw`text-gray-50  `}>Title</Text>
        <Text style={tw``}>Description</Text>
      </View>
    </View>
  );
};

export default CarouselItems;

const styles = StyleSheet.create({});
