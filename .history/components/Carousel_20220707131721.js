import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import CarouselItems from "./CarouselItems";
import { testData } from "../data/Data";
import { FlatList } from "react-native";

const { width, height } = Dimensions.get("window");

const Carousel = ({ data }) => {
  if (data && data.length) {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItems item={item} />;
          }}
        />
        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{ opacity, height: 10, width: 10, background: "" }}
              />
            );
          })}
        </View>
      </View>
    );
  }
};

export default Carousel;

const styles = StyleSheet.create({});
