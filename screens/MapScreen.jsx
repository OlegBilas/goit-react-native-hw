import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ navigation, route }) => {
  const { title, place, location } = route.params;
  const coords = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...coords,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker title={title} coordinate={coords} description={place} />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
