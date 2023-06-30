import React from "react";
import { Image, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { commonStyles } from "./commonStyles";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function PostCard({ data: { photo, title, place, coords, likes, comments } }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.foto} />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.postDataContainer}>
        <Feather
          name="message-circle"
          size={24}
          color={commonStyles.vars.colorAccent}
          style={{ marginRight: 6 }}
          onPress={() => {
            navigation.navigate("Comments", { photo });
          }}
        />
        <Text style={[styles.text, { marginRight: 24 }]}>
          {comments.length}
        </Text>
        <Feather
          title="thumbs-up"
          size={24}
          color={commonStyles.vars.colorAccent}
          style={{ marginRight: 6 }}
        />
        <Text style={[styles.text, { marginRight: "auto" }]}>{likes}</Text>
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
    width: 343,
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
