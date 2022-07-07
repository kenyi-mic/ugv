import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const { width, height } = Dimensions.get("window");
const CourselItems = ({ item: { url, itemTitle, description } }) => {
  return (
    <View style={[tw`mx-auto my-10`, styles.cardView]}>
      <Image
        style={tw`w-${width - 20} h-${height / 3} `}
        source={{
          uri: url,
        }}
      />
      <View style={[tw``, styles.textView]}>
        <Text style={[tw`text-gray-50 font-bold mb-5`, styles.itemTitle]}>
          {itemTitle}
        </Text>
        <Text style={[tw`text-gray-100`, styles.itemDescription]}>
          {description}
        </Text>
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
  textView: {
    position: "absolute",
    margin: 10,
    bottom: 10,
    left: 5,
  },
  itemTitle: {
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  itemDescription: {
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
