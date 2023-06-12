import { StyleSheet, View } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import { Ionicons } from "@expo/vector-icons";

function AvatarWrapper({ Add }) {
  return (
    <View style={styles.avatarWrapper}>
      <Avatar />
      {Add ? (
        <Ionicons
          name="add-circle-outline"
          size={25}
          style={[styles.icon, { color: "#FF6C00" }]}
        />
      ) : (
        <Ionicons
          name="close-circle-outline"
          size={25}
          style={[styles.icon, { color: "#BDBDBD" }]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatarWrapper: {
    width: 132,
    height: 120,
    position: "absolute",
    top: "-32%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: 50 }],
  },

  icon: {
    // width: 25,
    // height: 25,
    position: "absolute",
    bottom: 14,
    right: 0,
    backgroundColor: "transperent",
  },
});
export default AvatarWrapper;
