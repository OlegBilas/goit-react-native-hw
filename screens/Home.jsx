import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Octicons, Feather } from "@expo/vector-icons";
import { commonStyles } from "../components/commonStyles";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();
const Home = () => {
  const navigation = useNavigation();

  return (
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
                focused
                  ? styles.buttonTabWrapperActive
                  : styles.buttonTabWrapper
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
        // headerStyle: {
        //   height: 44,
        // },
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
              color={commonStyles.vars.colorText}
              style={{ marginRight: 10 }}
              onPress={navigation.navigate("Home")}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Octicons
              name="arrow-left"
              size={24}
              color={commonStyles.vars.colorText}
              style={{ marginLeft: 10 }}
              onPress={navigation.goBack}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        // options={({ navigation }) => ({
        //   headerLeft: () => (
        //     <Feather
        //       name="log-out"
        //       size={24}
        //       color={commonStyles.vars.colorText}
        //       style={{ marginLeft: 10 }}
        //       onPress={navigation.navigate("Login")}
        //     />
        //   ),
        // })}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonTabWrapperActive: {
    width: 70,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: commonStyles.vars.colorAccent,
  },
  buttonTabWrapper: {
    backgroundColor: commonStyles.vars.colorWhite,
  },
});

export default Home;
