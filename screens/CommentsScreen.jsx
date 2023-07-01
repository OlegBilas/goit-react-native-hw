import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { commonStyles } from "../components/commonStyles";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";

function CommentsScreen({ navigation, route }) {
  const { photo, comments } = route.params.photo;
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.backgroundPhoto} />
      <View style={styles.comments}>
        {/* <FlatList
          data={comments}
          renderItem={({ item }) => <Comment data={item}></Comment>}
          keyExtractor={(item) => item.id}
          slyle={styles.postsList}
        /> */}
      </View>
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
    width: "100%",
    flex: 1,

    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    color: commonStyles.vars.colorText,
    backgroundColor: commonStyles.vars.colorWhite,
  },
  backgroundPhoto: {
    width: "100%",
    height: 240,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
    borderRadius: 8,
    overflow: "hidden",
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
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 16,
    color: commonStyles.vars.colorText,
    fontFamily: "Roboto-500",
    fontSize: 16,
    textAlignVertical: "top",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    borderColor: commonStyles.vars.colorGray,
    borderWidth: 1,
  },
  arrowUpButton: { position: "absolute", bottom: 24, right: 36 },
});
export default CommentsScreen;
