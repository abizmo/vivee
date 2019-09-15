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
      "extralight-italic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
      semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      regular: require("./assets/fonts/Poppins-Regular.ttf"),
      bold: require("./assets/fonts/Poppins-Bold.ttf"),
      light: require("./assets/fonts/Poppins-Light.ttf"),
      medium: require("./assets/fonts/Poppins-Medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Navigator />
        ) : (
          <ActivityIndicator size="large" color="#53714B" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
