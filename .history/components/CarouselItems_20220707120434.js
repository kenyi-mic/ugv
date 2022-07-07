import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const { width, height } = Dimensions.get("window");

const CarouselItems = ({ item }) => {
  return (
    <View style={[tw`mx-auto my-10`, styles.cardView]}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={[tw``, styles.textView]}>
        <Text style={[tw`text-gray-50  `, styles.itemTitle]}>{item.title}</Text>
        <Text style={[tw``, styles.itemDescription]}>{item.description}</Text>
      </View>
    </View>
  );
};

export default CarouselItems;

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
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    shadowColor: "black",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 12,
    shadowColor: "black",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,

    shadowRadius: 3,
    elevation: 5,
  },
});
