import { StyleSheet, View } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

function AvatarWrapper({ photo = null, add, customStyles = {} }) {
  const navigation = useNavigation();
  const routePrev = useRoute().name;

  const handlePress = () => {
    navigation.navigate("CreateAvatar", { routePrev });
  };

  return (
    <View style={[styles.avatarWrapper, customStyles]}>
      <Avatar photo={photo} />
      {add ? (
        <Ionicons
          name="add-circle-outline"
          size={25}
          style={[styles.icon, { color: "#FF6C00" }]}
          onPress={handlePress}
        />
      ) : (
        <Ionicons
          name="close-circle-outline"
          size={25}
          style={[styles.icon, { color: "#BDBDBD" }]}
          onPress={handlePress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatarWrapper: {
    width: 132,
    height: 120,
    position: "absolute",
  },

  icon: {
    position: "absolute",
    bottom: 14,
    right: 0,
  },
});
export default AvatarWrapper;
