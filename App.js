import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CommentsScreen from "./screens/CommentsScreen";
import { Octicons } from "@expo/vector-icons";
import { commonStyles } from "./components/commonStyles";
import PostCard from "./components/PostCard";
import MapScreen from "./screens/MapScreen";
import PostsScreen from "./screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{ headerShown: false }}
        /> */}
        <MainStack.Screen
          name="PostCard"
          component={PostCard}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({ navigation }) => ({
            title: "Коментарі",
            headerTitleAlign: "center",
            headerLeft: () => (
              <Octicons
                name="arrow-left"
                size={24}
                color={commonStyles.vars.colorText}
                style={{ marginLeft: 16, padding: 5 }}
                onPress={() => navigation.navigate("Posts")}
              />
            ),
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
