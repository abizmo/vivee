import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Text, Input } from "../components";
import { ratio } from "../constants/theme";
import { icons } from "../constants/icons";

export default class Register extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    isSecure: false
  };

  handleRegister() {
    console.log("Register");
  }

  handleRegisterWithFacebook() {
    console.log("Register with Facebook");
  }

  handleRegisterWithGoogle() {
    console.log("Register with Google");
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
          <Text
            caption
            fontFamily="medium"
            color="primary"
            style={styles.title}
          >
            {"New here?\nFill in the fields and join us!"}
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
            onPress={() => this.handleRegister()}
            style={styles.RegisterButton}
          >
            Register
          </Button>
        </View>
        <View>
          <Text>Or</Text>
          <Button
            facebook
            large
            rounded
            onPress={() => this.handleRegisterWithFacebook()}
            style={{}}
          >
            Register with Facebook
          </Button>
          <Button
            google
            large
            rounded
            onPress={() => this.handleRegisterWithGoogle()}
            style={{}}
          >
            Register with Google
          </Button>
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
    justifyContent: "center",
    marginBottom: 85 / ratio
  },
  title: { textAlign: "center", letterSpacing: 1 },
  form: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 151 / ratio
  },
  RegisterButton: { marginBottom: 22 / ratio, marginTop: 155 / ratio },
  registerMsg: { textAlign: "center" },
  registerAction: { textTransform: "uppercase" }
});
