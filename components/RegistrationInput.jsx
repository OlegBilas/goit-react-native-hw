import { StyleSheet, TextInput } from "react-native";

import React from "react";
import { commonStyles } from "./commonStyles";

function RegistrationInput({ Placeholder }) {
  return (
    <TextInput
      style={[styles.input, commonStyles.fonts]}
      placeholder={Placeholder}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 16,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    color: "#BDBDBD",
  },
});
export default RegistrationInput;
