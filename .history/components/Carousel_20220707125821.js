import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CarouselItems from "./CarouselItems";
import { testData } from "../data/Data";

const Carousel = (data) => {
  return (
    <View>
      <CarouselItems item={testData} />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
