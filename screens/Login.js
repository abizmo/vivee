import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, Input } from "../components";
import { ratio } from "../constants/theme";
import { isotipo } from "../constants/images";

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: "",
    isSecure: true
  };

  render() {
    const { navigate } = this.props.navigation;
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
          <Input
            type="email"
            value={this.state.email}
            label="Email"
            onChange={email => this.setState({ email })}
          />
          <Input
            type="password"
            value={this.state.password}
            label="Password"
            onChange={password => this.setState({ password })}
            secure={this.state.isSecure}
          />
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
            <Text
              fontFamily="bold"
              style={{ textTransform: "uppercase" }}
              onPress={() => navigate("Register")}
            >
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
