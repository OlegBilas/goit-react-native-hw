import React from "react";
import { Image, Text, View } from "react-native";
import { commonStyles } from "./commonStyles";
import { StyleSheet } from "react-native";
import { auth } from "../config";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import ellipse from "../assets/images/ellipse";

function Comment({ navigation, route }) {
  const { id: idUser, date, text } = route.params.data;
  const user = useSelector(selectUser);
  return auth.currentUser.uid === idUser ? (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={{ uri: user.photo }} style={styles.avatar} />
    </View>
  ) : (
    <View style={styles.container}>
      <Image source={ellipse} style={styles.avatar} />
      <View style={styles.commentContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 299,
    marginBottom: 32,
    color: commonStyles.vars.colorText,
    backgroundColor: commonStyles.vars.colorWhite,
  },
  avatar: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    resizeMode: "cover",
    backgroundColor: commonStyles.vars.colorGray,
  },

  commentContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  text: { ...commonStyles.fonts },
});

export default Comment;
