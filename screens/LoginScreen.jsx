import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import Title from "../components/Title";
import RegistrationInput from "../components/RegistrationInput";
import AvatarWrapper from "../components/AvatarWrapper";
import HeroButton from "../components/HeroButton";
import RegistrationLink from "../components/RegistrationLink";
import MainBackground from "../components/MainBackground";

function LoginScreen() {
  return (
    <View style={{ width: "100%" }}>
      <MainBackground>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.form}>
            <Title
              customStyles={{
                marginTop: 32,
                marginBottom: 12,
              }}
            >
              Увійти
            </Title>
            <RegistrationInput placeholder="Адреса електронної пошти" />
            <RegistrationInput placeholder="Пароль" />
          </KeyboardAvoidingView>
          <HeroButton>Увійти</HeroButton>
          <RegistrationLink>Немає акаунту? Зареєструватися</RegistrationLink>
        </View>
      </MainBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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

  form: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    gap: 18,
  },
});

export default LoginScreen;
