import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";

import Title from "../components/Title";
import RegistrationInput from "../components/RegistrationInput";
import HeroButton from "../components/HeroButton";
import RegistrationLink from "../components/RegistrationLink";
import MainBackground from "../components/MainBackground";

function LoginScreen() {
  return (
    <MainBackground>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewStyles}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.form}>
            <Title
              customStyles={{
                marginTop: 92,
                marginBottom: 12,
              }}
            >
              Увійти
            </Title>

            <RegistrationInput placeholder="Адреса електронної пошти" />
            <RegistrationInput placeholder="Пароль" />
          </View>
          <HeroButton>Увійти</HeroButton>
          <RegistrationLink>Немає акаунту? Зареєструватися</RegistrationLink>
        </View>
      </KeyboardAvoidingView>
    </MainBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 549,
    color: "#212121",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    gap: 18,
  },
  keyboardAvoidingViewStyles: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default LoginScreen;
