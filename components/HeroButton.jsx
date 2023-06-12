import { StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import { commonStyles } from "./commonStyles";

function HeroButton({ children }) {
  return (
    <Pressable style={styles.button}>
      <Text style={[commonStyles.fonts, styles.buttonText]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 43,
    marginLeft: 16,
    marginRight: 16,
    height: 51,
    padding: 16,
    borderRadius: 100,
    backgroundColor: commonStyles.styleVariables.accentColor,
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
  },
});
export default HeroButton;
