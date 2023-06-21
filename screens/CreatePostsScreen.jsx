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

function CreatePostsScreen() {
  return (
    <View style={styles.container}>
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
      <View style={{ marginTop: 32, marginBottom: 32 }}>
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
          style={styles.name}
        />
      </View>
      <HeroButton style={{ marginBottom: 120 }}>Опублікувати</HeroButton>
      <View>
        <Feather name="trash-2" size={24} color={commonStyles.vars.colorGray} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: "auto",
    // marginRight: "auto",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    color: commonStyles.vars.colorText,
    backgroundColor: commonStyles.vars.colorWhite,
  },
  imageWrapper: { width: "100%", height: 267, marginBottom: 32 },
  backgroundPhoto: {
    width: 343,
    height: 240,
    // borderTopRightRadius: 8,
    // borderTopLeftRadius: 8,
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
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
    zIndex: 1,
  },
  text: {
    ...commonStyles.fonts,
    color: commonStyles.vars.colorGray,
    height: 19,
  },
  input: { width: 343, height: 50, ...commonStyles.fonts, marginBottom: 16 },
  mapPin: {
    position: "absolute",
    top: "50%",
    left: 0,
    // transform: [{ translateY: -8 }],
  },
  buttonWrapper: {
    width: 70,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: commonStyles.vars.colorGray,
  },
});

export default CreatePostsScreen;
