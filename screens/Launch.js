import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { images, theme } from "../constants";

const logo = images.imagotipo;
const { colors, sizes, fonts } = theme;

export default class Launch extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    return (
      <View
        style={styles.container}
        onTouchEnd={() => navigation.navigate("OnBoarding")}
      >
        <Image source={logo} style={styles.logo} />
        <Text style={styles.subtitle}>find good food</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    marginBottom: sizes.margin
  },
  subtitle: {
    fontFamily: "poppins-extralight-italic",
    textAlign: "center",
    color: colors.primary,
    ...fonts.h2
  }
});
