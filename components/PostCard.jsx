import React from "react";
import { Image, Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { commonStyles } from "./commonStyles";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addLike } from "../redux/posts/operations";
import { auth } from "../config";
import { useDispatch } from "react-redux";

function PostCard({
  data: { id, photo, title, place, coords, likes, comments },
}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.foto} />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.postDataContainer}>
        <Feather
          name="message-circle"
          size={24}
          color={commonStyles.vars.colorAccent}
          style={[
            { marginRight: 6 },
            comments.length > 0 && {
              backgroundColor: commonStyles.vars.colorAccent,
            },
          ]}
          onPress={() => {
            navigation.navigate("Comments", { idPost: id, photo, comments });
          }}
        />
        <Text style={[styles.text, { marginRight: 24 }]}>
          {comments.length}
        </Text>
        {
          <Feather
            name="thumbs-up"
            size={24}
            color={commonStyles.vars.colorAccent}
            style={{ marginRight: 6 }}
            onPress={() => {
              dispatch(addLike({ idPost: id, idUser: auth.currentUser.uid }));
            }}
          />
        }
        <Text style={[styles.text, { marginRight: "auto" }]}>
          {likes.length}
        </Text>
        <Feather
          name="map-pin"
          size={24}
          color={commonStyles.vars.colorGray}
          style={{ marginRight: 4 }}
          onPress={() => {
            navigation.navigate("Map", { title, place, coords });
          }}
        />
        <Text
          style={[
            styles.text,
            { textDecorationLine: "underline", textDecorationStyle: "solid" },
          ]}
        >
          {place}
        </Text>
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
  foto: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    resizeMode: "cover",
    backgroundColor: commonStyles.vars.colorGray,
  },
  title: {
    marginBottom: 8,
    ...commonStyles.fonts,
    fontFamily: "Roboto-500",
  },
  postDataContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  text: { ...commonStyles.fonts },
});

export default PostCard;
