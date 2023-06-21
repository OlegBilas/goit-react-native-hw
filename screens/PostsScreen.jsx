import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Avatar from "../components/Avatar";
// import Header from "../components/Header";
// import ToolBar from "../components/ToolBar";

export default function PostsScreen() {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={styles.container}>
        {/* <Header /> */}
        <View style={styles.posts}>
          <View style={styles.avatarWrapper}>
            <Avatar customStyles={{ width: 60, height: 60, marginRight: 8 }} />
            <View>
              <Text>Natali Romanova</Text>
              <Text>email@example.com</Text>
            </View>
          </View>
        </View>
        {/* <ToolBar /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    width: "100%",
    marginTop: 4,
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatarWrapper: {
    marginTop: 32,
    marginBottom: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  posts: { flex: 1, width: "100%" },
});
