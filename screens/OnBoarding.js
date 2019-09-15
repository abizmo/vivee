import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "../components";
import { images, theme } from "../constants";

const { ratio } = theme;

export default class OnBoarding extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={images.vegetables} style={styles.image} />
          <Text h1 fontFamily="bold" color="primary" style={styles.header}>
            We will find the best!
          </Text>
          <Text
            label
            fontFamily="regular"
            color="primary"
            style={styles.subheader}
          >
            find the nearest places with the best organic foods and make your
            life healthier!
          </Text>
        </View>
        <Button
          primary
          medium
          rounded
          style={styles.button}
          onPress={() => navigate("Login")}
        >
          Let's go
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 140 / ratio
  },
  image: { marginBottom: 69 / ratio },
  header: { textTransform: "uppercase", marginBottom: 21 / ratio },
  subheader: { textAlign: "center", maxWidth: 730 / ratio },
  button: { marginBottom: 130 / ratio }
});
