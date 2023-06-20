import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
import { commonStyles } from "../components/commonStyles";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();
const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Posts") {
            return (
              <Feather
                name="grid"
                size={40}
                style={
                  focused
                    ? styles.button
                    : {
                        color: commonStyles.vars.colorText,
                      }
                }
              />
            );
          } else if (route.name === "CreatePost") {
            return (
              <Feather
                name="plus"
                size={13}
                style={
                  focused
                    ? styles.button
                    : {
                        color: commonStyles.vars.colorText,
                      }
                }
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Feather
                name="user"
                size={40}
                style={
                  focused
                    ? styles.button
                    : {
                        color: commonStyles.vars.colorText,
                      }
                }
              />
            );
          }
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: commonStyles.vars.colorAccent,
        tabBarInactiveTintColor: commonStyles.vars.colorText,
        tabBarStyle: styles.tabBarStyle,
      })}
    >
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 83,
    width: "100%",
    paddingTop: 9,
    paddingBottom: 34,
    paddingLeft: 82,
    paddingRight: 82,
    // borderTopWidth: 1,
    // borderTopColor: "grey",
  },
  button: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    color: commonStyles.vars.colorWhite,
    backgroundColor: commonStyles.vars.colorAccent,
  },
});

export default Home;
