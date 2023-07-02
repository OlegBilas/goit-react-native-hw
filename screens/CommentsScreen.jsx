import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { commonStyles } from "../components/commonStyles";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../redux/posts/operations";
import { auth } from "../config";
import { Alert } from "react-native";
import Comment from "../components/Comment";
import { selectPosts } from "../redux/posts/selectors";

function CommentsScreen({ navigation, route }) {
  const { idPost, photo, comments } = route.params;
  const [comment, setComment] = useState("");
  posts = useSelector(selectPosts);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingViewStyles}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <Image source={{ uri: photo }} style={styles.backgroundPhoto} />
            <View style={styles.comments}>
              <ScrollView>
                {comments.map((item, index) => (
                  <Comment key={index} data={item} />
                ))}
              </ScrollView>
              {/* <FlatList
                data={comments}
                renderItem={({ item }) => <Comment data={item}></Comment>}
                keyExtractor={(item) => item.index}
                slyle={styles.postsList}
              /> */}
            </View>
            <TextInput
              value={comment}
              placeholder="Коментувати..."
              placeholderTextColor={{
                color: commonStyles.vars.colorGray,
              }}
              style={styles.input}
              multiline={true}
              onChangeText={setComment}
            />
            <Ionicons
              name="arrow-up-circle"
              size={34}
              color={commonStyles.vars.colorAccent}
              style={styles.arrowUpButton}
              onPress={() => {
                dispatch(
                  addComment({
                    idPost,
                    idUser: auth.currentUser.uid,
                    date: new Date(),
                    text: comment,
                  })
                ).then((res) => {
                  if (res.type === "posts/addComment/fulfilled") {
                    setComment("");
                  } else {
                    return Alert.alert(
                      "Помилка створення коментаря",
                      `Опис помилки із сервера: ${res.payload}`
                    );
                  }
                });
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  keyboardAvoidingViewStyles: {
    flex: 1,
    // width: "100%",
    // minHeight: 712,
    // justifyContent: "flex-end",
    // alignItems: "center",
  },
  container: {
    // width: "100%",
    // height: 812,
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
