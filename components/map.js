import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import Text from "./text";
import { ratio } from "../constants/theme";
import { icons } from "../constants/icons";

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
        <MapView style={styles.mapView} region={region} showsUserLocation />
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
