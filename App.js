import React from "react";
import * as Font from "expo-font";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Navigator from "./navigation";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "poppins-extralight-italic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#53714B" />
        </View>
      );
    }
    return <Navigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
