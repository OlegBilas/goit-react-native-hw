import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
} from "react-native";
import { commonStyles } from "../components/commonStyles";
import backgroundPhoto from "../assets/images/background-photo.png";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import HeroButton from "../components/HeroButton";
import { KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingViewStyles}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={backgroundPhoto}
              style={styles.backgroundPhoto}
            >
              <Pressable
                style={[
                  styles.buttonPhoto,
                  { backgroundColor: commonStyles.vars.colorWhite },
                ]}
              >
                <MaterialCommunityIcons
                  name="camera"
                  size={24}
                  color={commonStyles.vars.colorGray}
                />
              </Pressable>
            </ImageBackground>
            <Text style={styles.text}>Завантажте фото</Text>
          </View>
          <View style={{ marginTop: 32, marginBottom: 16 }}>
            <TextInput
              placeholder="Назва..."
              placeholderTextColor={commonStyles.vars.colorGray}
              style={styles.input}
            />
            <Feather
              name="map-pin"
              size={24}
              color={commonStyles.vars.colorGray}
              style={styles.mapPin}
            />
            <TextInput
              placeholder="Місцевість.."
              placeholderTextColor={commonStyles.vars.colorGray}
              style={[styles.input, { paddingLeft: 28 }]}
            />
          </View>
          <HeroButton
            style={{
              marginTop: 0,
              marginBottom: 120,
              backgroundColor: "#F6F6F6",
              color: commonStyles.vars.colorGray,
            }}
          >
            Опублікувати
          </HeroButton>
          <View style={styles.buttonWrapper}>
            <Feather
              name="trash-2"
              size={24}
              color={commonStyles.vars.colorGray}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    color: commonStyles.vars.colorText,
    backgroundColor: commonStyles.vars.colorWhite,
  },
  keyboardAvoidingViewStyles: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageWrapper: { width: "100%", height: 267 },
  backgroundPhoto: {
    width: 343,
    height: 240,
    borderRadius: 8,
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPhoto: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  text: {
    ...commonStyles.fonts,
    color: commonStyles.vars.colorGray,
    height: 19,
  },
  input: {
    ...commonStyles.fonts,
    height: 50,
    marginBottom: 16,
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: commonStyles.vars.colorGray,
  },
  mapPin: {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: [{ translateY: 12 }],
  },
  buttonWrapper: {
    width: 70,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});

export default CreatePostsScreen;
