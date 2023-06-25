import React from "react";
import { StyleSheet, View } from "react-native";
import MainBackground from "../components/MainBackground";
import AvatarWrapper from "../components/AvatarWrapper";
import Title from "../components/Title";
import { Feather } from "@expo/vector-icons";
import { commonStyles } from "../components/commonStyles";
import { useNavigation } from "@react-navigation/native";

function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <MainBackground>
      <View style={styles.background}>
        <AvatarWrapper
          customStyles={{
            top: -60,
            left: "50%",
            transform: [{ translateX: -50 }],
          }}
          add={false}
        />
        <Feather
          name="log-out"
          size={24}
          color={commonStyles.vars.colorGray}
          style={styles.logOut}
          onPress={() => navigation.navigate("PostCard")}
        />
        <Title
          customStyles={{
            marginTop: 92,
            marginBottom: 32,
          }}
        >
          Natali Romanova
        </Title>
      </View>
    </MainBackground>
  );
}

const styles = StyleSheet.create({
  logOut: {
    position: "absolute",
    top: 22,
    right: 16,
    padding: 5,
  },
  background: {
    marginTop: 147,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    height: 549,
    // color: commonStyles.vars.colorText,
    backgroundColor: commonStyles.vars.colorWhite,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
export default ProfileScreen;
