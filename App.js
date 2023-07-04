import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import CommentsScreen from "./screens/CommentsScreen";
import { Octicons } from "@expo/vector-icons";
import { commonStyles } from "./components/commonStyles";
import PostCard from "./components/PostCard";
import MapScreen from "./screens/MapScreen";
import { Provider, useDispatch, useSelector } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import CreateAvatar from "./screens/CreateAvatar";
// import Loader from "./components/Loader";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { AuthStateChanged, refreshUser } from "./redux/auth/operations";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // const isRefreshing = useSelector(selectIsRefreshing);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  const MainStack = createStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <MainStack.Screen
              name="CreateAvatar"
              component={CreateAvatar}
              options={({ navigation }) => ({
                title: "Створення фото користувача",
                headerTitleAlign: "center",
                headerLeft: () => (
                  <Octicons
                    name="arrow-left"
                    size={24}
                    color={commonStyles.vars.colorText}
                    style={{ marginLeft: 16, padding: 5 }}
                    onPress={() => navigation.navigate("Profile")}
                  />
                ),
              })}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
