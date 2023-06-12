import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View>
      <Pressable style={styles.button}>
        <Image source={require("../assets/images/arrow-left")} />
      </Pressable>
      <Text>Публікації</Text>
      <Pressable>
        <Image source={require("../assets/images/log-out.png")} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
  },
});
