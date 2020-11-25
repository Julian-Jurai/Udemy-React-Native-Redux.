import React from "react";
import { View, Button, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const INCREMENT = 20;

const colorReducer = (state, { type, payload }) => {
  if (!type || !payload) return state;

  if (state[type] && (state[type] + payload > 255 || state[type] + payload < 0))
    return state;

  switch (type) {
    case "change_red":
      return { ...state, red: state.red + payload };
    case "change_green":
      return { ...state, green: state.green + payload };
    case "change_blue":
      return { ...state, blue: state.blue + payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = React.useReducer(colorReducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const rgb = `rgb(${state.red},${state.green},${state.blue})`;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrement={() => dispatch({ type: "change_red", payload: INCREMENT })}
        onDecrement={() =>
          dispatch({ type: "change_red", payload: -INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrement={() =>
          dispatch({ type: "change_green", payload: INCREMENT })
        }
        onDecrement={() =>
          dispatch({ type: "change_green", payload: -INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrement={() =>
          dispatch({ type: "change_blue", payload: INCREMENT })
        }
        onDecrement={() =>
          dispatch({ type: "change_blue", payload: -INCREMENT })
        }
      />
      <View style={{ height: 150, width: 150, backgroundColor: rgb }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
