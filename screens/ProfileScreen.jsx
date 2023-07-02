import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MainBackground from "../components/MainBackground";
import AvatarWrapper from "../components/AvatarWrapper";
import Title from "../components/Title";
import { Feather } from "@expo/vector-icons";
import { commonStyles } from "../components/commonStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { logOut, updateUserData } from "../redux/auth/operations";

function ProfileScreen(navigation, route) {
  const photo = route.params?.photo;

  console.log("photo", photo);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (photo && photo !== user.photo) {
      dispatch(updateUserData({ ...user, photo }));
    }
  }, [dispatch, user, photo]);

  return (
    <MainBackground>
      <View style={styles.background}>
        <AvatarWrapper
          photo={photo}
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
          onPress={() => {
            logOut();
            navigation.navigate("Login");
          }}
        />
        <Title
          customStyles={{
            marginTop: 92,
            marginBottom: 32,
          }}
        >
          {user.login}
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
