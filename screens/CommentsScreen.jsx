import React from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import backgroundPhoto from "../assets/images/background-photo.png";
import { commonStyles } from "../components/commonStyles";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CommentsScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundPhoto}
        style={styles.backgroundPhoto}
      />
      <View style={styles.comments}></View>
      <TextInput
        placeholder="Коментувати..."
        placeholderTextColor={{
          color: commonStyles.vars.colorGray,
        }}
        style={styles.input}
        multiline={true}
      />
      <Ionicons
        name="arrow-up-circle"
        size={34}
        color={commonStyles.vars.colorAccent}
        style={styles.arrowUpButton}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    color: commonStyles.vars.colorText,
    backgroundColor: commonStyles.vars.colorWhite,
  },
  backgroundPhoto: {
    width: 343,
    height: 240,
    marginBottom: 32,
    borderRadius: 8,
    resizeMode: "cover",
    flex: 1,
  },
  comments: {
    flex: 1,
    marginBottom: 32,
    // fontFamily: "Roboto-400", - пренести у коментарі
    // fontSize: 13,
    // lineHeight: 18,
    // color: commonStyles.vars.colorText,
  },
  input: {
    height: 50,
    width: 343,
    padding: 16,
    color: commonStyles.vars.colorGray,
    fontFamily: "Roboto-500",
    fontSize: 16,
    textAlignVertical: "top",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    borderColor: commonStyles.vars.colorGray,
  },
  arrowUpButton: { position: "absolute", bottom: 24, right: 36 },
});
export default CommentsScreen;
