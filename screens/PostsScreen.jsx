import React, { useEffect } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Avatar from "../components/Avatar";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { selectIsLoading, selectPosts } from "../redux/posts/selectors";
import { FlatList } from "react-native";
import { fetchPosts } from "../redux/posts/operations";
import AnimatedLoader from "react-native-animated-loader";

export default function PostsScreen() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <AnimatedLoader
      source={require("../assets/loader/98195-loader.json")}
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      speed={1}
      style={{ flex: 1 }}
    />
  ) : (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={styles.container}>
        <View style={styles.posts}>
          <View style={styles.avatarWrapper}>
            <Avatar
              customStyles={{ width: 60, height: 60, marginRight: 8 }}
              photo={user.photo}
            />
            <View>
              <Text>{user.login}</Text>
              <Text>{user.email}</Text>
            </View>
          </View>
          <FlatList
            data={posts}
            renderItem={({ item }) => <PostCard data={item}></PostCard>}
            keyExtractor={(item) => item.id}
          />
        </View>
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
    marginBottom: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  posts: { flex: 1, width: "100%" },
});
