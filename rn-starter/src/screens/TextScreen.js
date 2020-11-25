import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const MIN_LENGTH = 5;

const TextScreen = () => {
  const [currentText, setCurrentText] = React.useState("");

  return (
    <View>
      <Text>My name is {currentText}</Text>
      {currentText.length < MIN_LENGTH && (
        <Text
          style={styles.validation}
        >{`Password must be longer than ${MIN_LENGTH} characters.`}</Text>
      )}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={currentText}
        onChangeText={(value) => setCurrentText(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  validation: {
    backgroundColor: "#f4aac4",
    padding: 10,
  },
});

export default TextScreen;
