import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, Octicons } from "@expo/vector-icons";
import { commonStyles } from "./commonStyles";

export default function Header() {
  return (
    <View style={styles.container}>
      <Octicons
        name="arrow-left"
        size={24}
        color={commonStyles.vars.colorText}
      />
      <Text style={styles.title}>Публікації</Text>
      <Feather name="log-out" size={24} color={commonStyles.vars.colorText} />
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
    color: commonStyles.vars.colorText,
  },

  icon: {
    width: 24,
    height: 24,
  },
});
