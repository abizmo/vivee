import React from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Text, Input } from "../components";
import { ratio } from "../constants/theme";
import { isotipo } from "../constants/images";
import { icons } from "../constants/icons";
import { user } from "../constants/mocks";

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: "",
    error: "",
    isSecure: false
  };

  handleLogin() {
    const { email, password } = this.state;

    if (email === user.EMAIL && password === user.PASSWORD) {
      this.props.navigation.navigate("Home");
    } else {
      this.setState({ error: "Email/password wrong" });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        behavior="position"
      >
        <View style={styles.header}>
          <Image source={isotipo} style={styles.logo} />
          <Text h1 fontFamily="semibold" color="primary" style={styles.title}>
            Welcome to VIVEE
          </Text>
          <Text label fontFamily="regular" color="grey">
            helping you to find the best food
          </Text>
        </View>
        <View style={styles.form}>
          <Input
            type="email"
            value={this.state.email}
            label="Email"
            onChange={email => this.setState({ email })}
            icon={icons.email}
          />
          <Input
            type="password"
            value={this.state.password}
            label="Password"
            onChange={password => this.setState({ password })}
            secure={this.state.isSecure}
            icon={icons.secure}
          />
          <Button
            primary
            large
            rounded
            onPress={() => this.handleLogin()}
            style={styles.loginButton}
          >
            Log In
          </Button>
          <Text
            body
            fontFamily="regular"
            color="primary"
            style={styles.registerMsg}
          >
            Do not have an account?{" "}
            <Text
              fontFamily="bold"
              style={styles.registerAction}
              onPress={() => navigate("Register")}
            >
              Register
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 140 / ratio
  },
  header: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    height: 180 / ratio,
    width: 135 / ratio,
    resizeMode: "contain",
    marginBottom: 35 / ratio
  },
  title: { letterSpacing: 1, marginBottom: 36 / ratio },
  form: {
    flex: 1.1,
    justifyContent: "center",
    marginBottom: 151 / ratio
  },
  loginButton: { marginBottom: 22 / ratio, marginTop: 155 / ratio },
  registerMsg: { textAlign: "center" },
  registerAction: { textTransform: "uppercase" }
});
