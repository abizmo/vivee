import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Header, Map, Text } from "../components";
import { ratio } from "../constants/theme";
import { icons } from "../constants/icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 60.003224;
const LONGITUDE = 23.376654;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: <Header>Vivee</Header>
  };

  state = {
    active: "leaf"
  };

  changeActive(active) {
    this.setState({ active });
  }

  renderBar() {
    const { active } = this.state;

    return (
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => this.changeActive("leaf")}>
          <Image
            source={active === "leaf" ? icons.leaf.active : icons.leaf.normal}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeActive("notification")}>
          <Image
            source={
              active === "notification"
                ? icons.notification.active
                : icons.notification.normal
            }
          />
        </TouchableOpacity>
        <Image source={icons.profile} />
      </View>
    );
  }

  render() {
    const { active } = this.state;
    let render = (
      <Map
        style={styles.map}
        region={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }}
      />
    );

    switch (active) {
      case "notification":
        render = <Text>Notification</Text>;
        break;

      case "profile":
        render = <Text>Profile</Text>;
        break;
    }

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>{render}</View>
        {this.renderBar()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bar: {
    height: 195 / ratio,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 140 / ratio,
    alignItems: "center",
    elevation: 10
  },
  map: { flex: 1 }
});
