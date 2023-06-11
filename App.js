import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RegistrationScreen />;
}
