import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "./commonStyles";

export default function ToolBar() {
  return (
    <View style={styles.container}>
      <Pressable style={{}}>
        <Image
          source={require("../assets/images/grid.png")}
          style={styles.icon}
        />
      </Pressable>
      <Pressable style={styles.buttonCentral}>
        <Image
          source={require("../assets/images/plus.png")}
          style={styles.iconCentral}
        />
      </Pressable>
      <Pressable style={{}}>
        <Image
          source={require("../assets/images/user.png")}
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
    height: 83,
    width: "100%",
    paddingTop: 9,
    paddingBottom: 34,
    paddingLeft: 82,
    paddingRight: 82,
    borderTopWidth: 1,
    borderTopColor: "grey",
  },
  buttonCentral: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: commonStyles.styleVariables.accentColor,
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconCentral: { width: 13, height: 13 },
});
