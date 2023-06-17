import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { commonStyles } from "./commonStyles";

import { Feather } from "@expo/vector-icons";

export default function ToolBar() {
  return (
    <View style={styles.container}>
      <Feather name="grid" size={40} color="#212121" style={styles.icon} />
      <Pressable style={styles.button}>
        <Feather name="plus" size={13} color="white" />
      </Pressable>
      <Feather name="user" size={40} color="#212121" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 83,
    width: "100%",
    paddingTop: 9,
    paddingBottom: 34,
    paddingLeft: 82,
    paddingRight: 82,
    borderTopWidth: 1,
    borderTopColor: "grey",
  },
  button: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: commonStyles.vars.accentColor,
  },

  iconCentral: { width: 13, height: 13 },
});
