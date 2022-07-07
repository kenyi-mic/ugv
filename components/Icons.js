import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";

const Icons = () => {
  return (
    <View>
      <View
        style={tw`w-full flex flex-row justify-around pt-2 bg-transparent `}
      >
        <Icon name="home" type="fontawesome" size={25} color="blue" />
        <Icon
          name="graduation-cap"
          type="fontawesome"
          size={25}
          color="darkblue"
        />
        <Icon name="book" type="fontawesome" size={25} color="darkblue" />
        <Icon name="info" type="fontawesome" size={25} color="darkblue" />
        <Icon
          name="user-circle-o"
          type="fontawesome"
          size={25}
          color="darkblue"
        />
        <Icon name="navicon" type="fontawesome" size={25} color="darkblue" />
      </View>
    </View>
  );
};

export default Icons;

const styles = StyleSheet.create({});
