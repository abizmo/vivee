import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "../components";
import { ratio } from "../constants/theme";
import { isotipo } from "../constants/images";

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center"
          }}
        >
          <Image
            source={isotipo}
            style={{
              height: 180 / ratio,
              width: 135 / ratio,
              resizeMode: "contain",
              marginBottom: 35 / ratio
            }}
          />
          <Text
            h1
            fontFamily="semibold"
            color="primary"
            style={{ letterSpacing: 1, marginBottom: 36 / ratio }}
          >
            Welcome to VIVEE
          </Text>
          <Text label fontFamily="regular" color="grey">
            helping you to find the best food
          </Text>
        </View>
        <View
          style={{
            flex: 1.1,
            justifyContent: "center"
          }}
        >
          <View style={{ marginBottom: 106 / ratio }}>
            <Text
              label
              fontFamily="bold"
              color="primary"
              style={{
                marginBottom: 33 / ratio,
                textTransform: "uppercase",
                letterSpacing: 5
              }}
            >
              Email
            </Text>
            <Text>psilva.ericka@gmail.com</Text>
          </View>
          <View style={{}}>
            <Text
              label
              fontFamily="bold"
              color="primary"
              style={{
                marginBottom: 33 / ratio,
                textTransform: "uppercase",
                letterSpacing: 5
              }}
            >
              Password
            </Text>
            <Text>Contraseña</Text>
          </View>
          <Button
            primary
            large
            rounded
            style={{ marginBottom: 22 / ratio, marginTop: 155 / ratio }}
          >
            Log In
          </Button>
          <Text
            body
            fontFamily="regular"
            color="primary"
            style={{ textAlign: "center" }}
          >
            Do not have an account?{" "}
            <Text fontFamily="bold" style={{ textTransform: "uppercase" }}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 140 / ratio
  }
});
