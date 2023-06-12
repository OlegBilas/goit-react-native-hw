import { StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import { commonStyles } from "./commonStyles";

function RegistrationLink({ children }) {
  return (
    <Pressable
      style={[styles.link]}
      // onPress={() => alert("Simple Button pressed")}
    >
      <Text style={[commonStyles.fonts, styles.text]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    width: 252,
    height: 19,
    marginTop: 16,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  text: {
    color: "#1B4371",
  },
});
export default RegistrationLink;
