import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const Carousel = ({ data }) => {
  if (data && data.length > 0) {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
};

export default Carousel;

const styles = StyleSheet.create({});
