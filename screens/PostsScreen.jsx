import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../components/Avatar";
import Header from "../components/Header";

export default function PostsScreen() {
  return (
    <>
      <Header />
      <View>
        <Avatar customStyles={{ width: 60, height: 60 }} />
        <View>
          <Text>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
});
