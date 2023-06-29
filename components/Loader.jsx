import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { View } from "react-native";

export default function Loader() {
  return (
    <View>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="0.75"
        width="46"
        visible={true}
      />
    </View>
  );
}
