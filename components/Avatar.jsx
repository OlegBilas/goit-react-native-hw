import { StyleSheet, View } from "react-native";
import React from "react";

function Avatar({ customStyles = {} }) {
  return <View style={[styles.avatar, customStyles]}></View>;
}

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
});
export default Avatar;
