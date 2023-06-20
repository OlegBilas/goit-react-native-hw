import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

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
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
