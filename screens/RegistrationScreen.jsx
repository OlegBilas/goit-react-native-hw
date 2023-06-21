import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Title from "../components/Title";
import RegistrationInput from "../components/RegistrationInput";
import AvatarWrapper from "../components/AvatarWrapper";
import HeroButton from "../components/HeroButton";
import RegistrationLink from "../components/RegistrationLink";
import MainBackground from "../components/MainBackground";
import { commonStyles } from "../components/commonStyles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePressShowButton = () => {
    setShowPassword((prevState) => !prevState);
  };

  const navigation = useNavigation();
  const handleLogin = () => {
    if (login === "" || email === "" || password === "") {
      return Alert.alert(
        "Not corect data",
        `Please, fill all fields with non empty data`
      );
    }

    // Alert.alert(
    //   "Реєстраційні дані:",
    //   `
    //   логін: ${login}
    //   електронна пошта: ${email}
    //   пароль: ${password}`
    // );
    navigation.navigate("Home");
  };

  return (
    <MainBackground>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingViewStyles}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <View style={styles.form}>
              <AvatarWrapper add={true} />
              <Title
                customStyles={{
                  marginTop: 92,
                  marginBottom: 12,
                }}
              >
                Реєстрація
              </Title>
              <RegistrationInput
                placeholder="Логін"
                name="login"
                value={login}
                onChangeText={setLogin}
              />
              <RegistrationInput
                name="email"
                value={email}
                placeholder="Адреса електронної пошти"
                keyboardType={"email-address"}
                onChangeText={setEmail}
              />
              <View>
                <RegistrationInput
                  name="password"
                  value={password}
                  placeholder="Пароль"
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                ></RegistrationInput>

                <Pressable
                  style={styles.showButton}
                  onPress={handlePressShowButton}
                >
                  <Text style={styles.showButtonText}>
                    {!showPassword ? "Показати" : "Приховати"}
                  </Text>
                </Pressable>
              </View>
            </View>
            <HeroButton onPress={handleLogin}>Зареєструватися</HeroButton>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>Вже є акаунт? </Text>
              <RegistrationLink>Увійти</RegistrationLink>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </MainBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 549,
    color: commonStyles.vars.colorText,
    backgroundColor: commonStyles.vars.colorWhite,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    gap: 16,
  },
  keyboardAvoidingViewStyles: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  showButton: {
    position: "absolute",
    top: "50%",
    right: 16,
    transform: [{ translateY: -8 }],
  },
  showButtonText: { ...commonStyles.fonts, color: "#1B4371" },
  textWrapper: {
    flexDirection: "row",
    height: 19,
    marginTop: 16,
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: { ...commonStyles.fonts, color: "#1B4371" },
});
export default RegistrationScreen;
