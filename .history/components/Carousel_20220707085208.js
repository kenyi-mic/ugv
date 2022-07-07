import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const Carousel = ({ data }) => {
  if (data && data.length > 0) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          deceleration={"fast"}
          showHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
        />
      </View>
    );
  }
};

export default Carousel;

const styles = StyleSheet.create({});
