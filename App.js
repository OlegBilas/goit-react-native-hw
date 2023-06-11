import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import Mountains from "./assets/images/mountains.png";
import AddIcon from "./assets/images/add.png";
import DeleteIcon from "./assets/images/delete.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={Mountains} imageStyle={styles.background}>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.form}>
            <View style={styles.avatarWrapper}>
              <View style={styles.avatar}></View>
              <Pressable style={styles.avatarButton}>
                <Image source={AddIcon} style={styles.icon} />
              </Pressable>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              style={[styles.commonFont, styles.input]}
              placeholder="Логін"
            ></TextInput>
            <TextInput
              style={[styles.commonFont, styles.input]}
              placeholder="Адреса електронної пошти"
            ></TextInput>
            <TextInput
              style={[styles.commonFont, styles.input]}
              placeholder="Пароль"
            ></TextInput>
          </KeyboardAvoidingView>
          <Pressable style={styles.button}>
            <Text style={[styles.commonFont, styles.buttonText]}>
              Зареєструватися
            </Text>
          </Pressable>
          <Pressable
            style={[styles.buttonLink]}
            // onPress={() => alert("Simple Button pressed")}
          >
            <Text style={[styles.commonFont, styles.buttonLinkText]}>
              Вже є акаунт? Увійти
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  commonFont: { fontFamily: "Roboto-400", fontSize: 16, lineHeight: 18.75 },
  background: {
    flex: 1,
    width: "100%",
  },
  container: {
    width: "100%",
    minHeight: 549,
    marginTop: 263,
    flex: 1,
    color: "#212121",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrapper: {
    width: 132,
    height: 120,
    position: "absolute",
    top: "-32%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: 50 }],
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  icon: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: 0,
  },
  title: {
    height: 36,
    marginTop: 92,
    marginBottom: 12,
    fontFamily: "Roboto-500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  form: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    gap: 18,
  },
  input: {
    height: 50,
    padding: 16,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    color: "#BDBDBD",
  },
  button: {
    marginTop: 43,
    marginLeft: 16,
    marginRight: 16,
    height: 51,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
  },
  buttonLink: {
    width: 159,
    height: 19,
    marginTop: 16,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  buttonLinkText: { color: "#1B4371" },
});
