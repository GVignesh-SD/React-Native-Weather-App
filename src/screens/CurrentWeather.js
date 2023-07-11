import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const {wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message} = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText messageOne={"Hight: 8"} messageTwo={"Low: 6"} containerStyles={highLowWrapper} messageOneStyles={highLow} messageTwoStyles={highLow} />
      </View>
      <View style={bodyWrapper}>
        <RowText 
        messageOne={"Its sunny"} messageTwo={"Its perfect t-shirt weather"} 
        containerStyles={bodyWrapper} messageOneStyles={description} messageTwoStyles={message} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems:"center",
    justifyContent:"center",
    },
  wrapper : {
    flex : 1, 
    backgroundColor : "pink",

  },
  temp : {
    color : "black",
    fontSize : 48
  },
  feels: {
    fontSize:30,
    color : "black",
  },
  highLow: {
    color : "black",
    fontSize : 20,
  },
  highLowWrapper : {
    flexDirection: "row",
    gap : 15
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginHorizontal : 12,
    marginBottom:40
  },
  description : {
    fontSize: 48,
  },
  message:{
    fontSize: 30,
  }

})

export default CurrentWeather;
