import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Pressable style={{ marginLeft: 10 }}>
        <Image
          source={require("../assets/images/arrow-left.png")}
          style={styles.icon}
        />
      </Pressable>
      <Text style={styles.title}>Публікації</Text>
      <Pressable style={{ marginRight: 10 }}>
        <Image
          source={require("../assets/images/log-out.png")}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 44,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  title: {
    fontFamily: "Roboto-500",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    color: "#212121",
  },

  icon: {
    width: 24,
    height: 24,
  },
});
