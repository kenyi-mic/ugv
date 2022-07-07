import { Animated, Dimensions, FlatList, StyleSheet, View } from "react-native";
import tw from "twrnc";
import { CarouselItems } from "./CarouselItems";
import React, { useState, useEffect } from "react";

const { width, height } = Dimensions.get("window");
const scrollX = new Animated.Value(0);
let position = Animated.divide(scrollX, width);

const Carousel = ({ data }) => {
  if (data && data.length > 0) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItems item={item} />;
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ])}
        />
        <View style={[tw`flex-row justify-center`, styles.dotView]}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  background: "#595959",
                  margin: 8,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
  console.log("Please provide Image");
  return null;
};

export default Carousel;

const styles = StyleSheet.create({});
