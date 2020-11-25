import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const counterReducer = (state, { type }) => {
  switch (type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Text>Current Count {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
