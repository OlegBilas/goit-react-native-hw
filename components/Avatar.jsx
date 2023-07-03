import { StyleSheet, Image } from "react-native";
import React from "react";

function Avatar({ customStyles = {}, photo = null }) {
  // console.log("Foto in  Avatar", photo);
  return (
    <Image
      source={{ uri: photo }}
      style={[styles.avatar, customStyles]}
    ></Image>
  );
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
