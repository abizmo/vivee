import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Text from "./text";
import { ratio } from "../constants/theme";
import { icons } from "../constants/icons";

const markers = [
  {
    id: 1,
    title: "Gren Leaf Supermarket",
    rating: 4,
    address: "Rua São Gonçalo, 233",
    phone: "3077 5534",
    type: "market",
    coordinate: {
      latitude: 59.993605,
      longitude: 23.41028
    }
  },
  {
    id: 2,
    title: "Green Table Restaurant",
    rating: 4,
    address: "Rua São Gonçalo, 233",
    phone: "3077 5534",
    type: "restaurant",
    coordinate: {
      latitude: 59.991657,
      longitude: 23.372063
    }
  },
  {
    id: 3,
    title: "Vegan Market",
    rating: 4,
    address: "Rua São Gonçalo, 233",
    phone: "3077 5534",
    type: "market",
    coordinate: {
      latitude: 59.983705,
      longitude: 23.402058
    }
  },
  {
    id: 4,
    title: "Non Meat Bar",
    rating: 4,
    address: "Rua São Gonçalo, 233",
    phone: "3077 5534",
    type: "restaurant",
    coordinate: {
      latitude: 59.991657,
      longitude: 23.440018
    }
  }
];

export default class Map extends React.Component {
  render() {
    const { region } = this.props;
    return (
      <View style={styles.mapContainer}>
        <View style={styles.panelContainer}>
          <View style={styles.panelBox}>
            <Image source={icons.find} style={styles.boxIcons}></Image>
            <Text
              caption
              color="lighter"
              fontFamily="light"
              style={styles.inputSearch}
            >
              R. Dom João VI, Recife
            </Text>
            <Image source={icons.close} style={styles.boxIcons}></Image>
          </View>
        </View>
        <MapView style={styles.mapView} region={region} showsUserLocation>
          {markers.map(marker => (
            <Marker key={marker.id} coordinate={marker.coordinate}>
              <Image source={icons.marker} />
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: { width: "100%", height: "100%" },
  panelContainer: { width: "100%", position: "absolute" },
  panelBox: {
    backgroundColor: "white",
    height: 170 / ratio,
    marginHorizontal: 48 / ratio,
    marginTop: 103 / ratio,
    borderRadius: 10 / ratio,
    elevation: 10,
    flexDirection: "row",
    paddingHorizontal: 72 / ratio,
    justifyContent: "center",
    alignItems: "center"
  },
  boxIcons: { width: 40, resizeMode: "contain" },
  inputSearch: { flex: 1, marginHorizontal: 16 / ratio },
  mapView: { flex: 1 }
});
