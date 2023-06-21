import { StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import { commonStyles } from "./commonStyles";

function HeroButton({ style = {}, color11 = {}, onPress = {}, children }) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[commonStyles.fonts, styles.buttonText, color11]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 51,
    padding: 16,
    borderRadius: 100,
  },
  buttonText: {
    textAlign: "center",
    // color: commonStyles.vars.colorWhite,
  },
});
export default HeroButton;
