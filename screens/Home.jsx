import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Octicons, Feather } from "@expo/vector-icons";
import { commonStyles } from "../components/commonStyles";
import AnimatedLoader from "react-native-animated-loader";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import {
  AuthStateChanged,
  logOut,
  refreshUser,
} from "../redux/auth/operations";

import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { selectIsLoading } from "../redux/posts/selectors";

const Tabs = createBottomTabNavigator();
const Home = () => {
  AuthStateChanged();

  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <AnimatedLoader
      source={require("../assets/loader/98195-loader.json")}
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      speed={1}
      style={{ flex: 1 }}
    />
  ) : (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Posts") {
            iconName = "grid";
          } else if (route.name === "CreatePost") {
            iconName = "plus";
          } else if (route.name === "Profile") {
            iconName = "user";
          }
          return (
            <View
              style={
                focused ? styles.buttonWrapperActive : styles.buttonWrapper
              }
            >
              <Feather
                name={iconName}
                size={24}
                color={focused ? commonStyles.vars.colorWhite : "#616161"}
              />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: commonStyles.vars.colorWhite,
        tabBarInactiveTintColor: "#616161",
        tabBarStyle: {
          height: 83,
          paddingBottom: 9,
        },
        headerTitleAlign: "center",
        headerTintColor: commonStyles.vars.colorText,
        headerTitleStyle: {
          fontFamily: "Roboto-500",
          fontSize: 17,
          lineHeight: 22,
          textAlign: "center",
        },
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          title: "Публікації",
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color={commonStyles.vars.colorGray}
              style={{ marginRight: 16, padding: 5 }}
              onPress={() => {
                logOut();
                navigation.navigate("Login");
              }}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Створити публікацію",
          headerLeft: () => (
            <Octicons
              name="arrow-left"
              size={24}
              color={commonStyles.vars.colorGray}
              style={{ marginLeft: 16, padding: 5 }}
              onPress={() => navigation.navigate("Posts")}
            />
          ),
          tabBarStyle: {
            display: "none",
          },
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonWrapperActive: {
    width: 70,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: commonStyles.vars.colorAccent,
  },
  buttonWrapper: {
    backgroundColor: commonStyles.vars.colorWhite,
  },
});

export default Home;
