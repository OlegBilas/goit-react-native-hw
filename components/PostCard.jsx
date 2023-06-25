import React from "react";
import { Image, Text, View } from "react-native";
import backgroundPhoto from "../assets/images/background-photo.png";
import { Feather } from "@expo/vector-icons";
import { commonStyles } from "./commonStyles";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function PostCard() {
  const navigation = useNavigation();

  return (
    <View>
      <Image sourse={backgroundPhoto} style={styles.foto} />
      <Text style={styles.name}>Forest</Text>

      <View style={styles.postDataContainer}>
        <Feather
          name="message-circle"
          size={24}
          color={commonStyles.vars.colorAccent}
          style={{ marginRight: 6 }}
          onPress={() => {
            navigation.navigate("Comments");
          }}
        />
        <Text style={[styles.text, { marginRight: 24 }]}>8</Text>
        <Feather
          name="thumbs-up"
          size={24}
          color={commonStyles.vars.colorAccent}
          style={{ marginRight: 6 }}
        />
        <Text style={[styles.text, { marginRight: "auto" }]}>153</Text>
        <Feather
          name="map-pin"
          size={24}
          color={commonStyles.vars.colorGray}
          style={{ marginRight: 4 }}
          onPress={() => {
            navigation.navigate("Map");
          }}
        />
        <Text
          style={[
            styles.text,
            { textDecorationLine: "underline", textDecorationStyle: "solid" },
          ]}
        >
          Ukraine
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 299,
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
  name: {
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
