import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.childViewOneStyle}></View>
      <View style={styles.childViewTwoStyle}></View>
      <View style={styles.childViewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 1000,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  childViewOneStyle: {
    borderWidth: 1,
    backgroundColor: "red",
    borderColor: "blue",
    height: 75,
    width: 75,
  },
  childViewTwoStyle: {
    borderWidth: 1,
    backgroundColor: "green",
    borderColor: "blue",
    height: 75,
    width: 75,
    top: 50,
  },
  childViewThreeStyle: {
    borderWidth: 1,
    backgroundColor: "purple",
    borderColor: "blue",
    height: 75,
    width: 75,
  },
});

export default BoxScreen;
