import { StyleSheet, TextInput } from "react-native";

import React from "react";
import { commonStyles } from "./commonStyles";

function RegistrationInput({ placeholder }) {
  return (
    <TextInput
      style={[styles.input, commonStyles.fonts]}
      placeholder={placeholder}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    color: "#BDBDBD",
  },
});
export default RegistrationInput;
