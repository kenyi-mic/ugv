import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const { width, height } = Dimensions.get("window");
const CourselItems = () => {
  return (
    <View style={styles.cardView}>
      <Image style={tw`w-${width - 20} h-${height / 3} rounded-lg`} />
      <View style={[tw` absolute bottom-10 m-10 left-5`, styles.textView]}>
        <Text style={tw``}>Title</Text>
        <Text style={tw``}>Description</Text>
      </View>
    </View>
  );
};

export default CourselItems;

const styles = StyleSheet.create({
  cardView: {
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    backgroundColor: "white",
    shadowRadius: 3,
    width: width - 20,
    height: height / 3,
    elevation: 5,
    shadowColor: "#000",
  },
});
