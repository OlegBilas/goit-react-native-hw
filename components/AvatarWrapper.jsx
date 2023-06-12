import { Image, Pressable, StyleSheet, View } from "react-native";
import AddIcon from "../assets/images/add.png";
import DeleteIcon from "../assets/images/delete.png";
import React from "react";
import Avatar from "./Avatar";

function AvatarWrapper({ Add }) {
  return (
    <View style={styles.avatarWrapper}>
      <Avatar />
      <Pressable style={styles.avatarButton}>
        <Image source={Add ? AddIcon : DeleteIcon} style={styles.icon} />
      </Pressable>
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
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: 0,
  },
});
export default AvatarWrapper;
