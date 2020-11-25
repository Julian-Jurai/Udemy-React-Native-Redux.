import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, onIncrement, onDecrement }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrement} />
      <Button title={`Decrease ${color}`} onPress={onDecrement} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
