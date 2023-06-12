import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import Mountains from "../assets/images/mountains.png";

function MainBackground({ children }) {
  return (
    <ImageBackground source={Mountains} imageStyle={styles.background}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
});
export default MainBackground;
