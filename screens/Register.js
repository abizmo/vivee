import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Text, Input, Header } from "../components";
import { ratio } from "../constants/theme";
import { icons } from "../constants/icons";

export default class Register extends React.Component {
  static navigationOptions = {
    headerTitle: <Header>Register</Header>
  };

  state = {
    email: "",
    password: "",
    error: "",
    isSecure: false
  };

  handleRegister() {
    console.log("Register");
    this.props.navigation.navigate("Home");
  }

  handleRegisterWithFacebook() {
    console.log("Register with Facebook");
    this.props.navigation.navigate("Home");
  }

  handleRegisterWithGoogle() {
    console.log("Register with Google");
    this.props.navigation.navigate("Home");
  }

  render() {
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
        <View style={styles.formOthers}>
          <Text
            body
            fontFamily="regular"
            color="primary"
            style={styles.titleOthers}
          >
            Or
          </Text>
          <Button
            facebook
            large
            rounded
            onPress={() => this.handleRegisterWithFacebook()}
            style={styles.firstButton}
            icon={icons.facebook}
          >
            Register with Facebook
          </Button>
          <Button
            google
            large
            rounded
            onPress={() => this.handleRegisterWithGoogle()}
            style={{}}
            icon={icons.google}
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
    justifyContent: "flex-start",
    marginHorizontal: 140 / ratio
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 72 / ratio,
    marginBottom: 85 / ratio
  },
  title: { textAlign: "center", letterSpacing: 1 },
  form: {
    justifyContent: "center"
  },
  formOthers: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 110 / ratio
  },
  titleOthers: { textTransform: "uppercase", marginVertical: 50 / ratio },
  firstButton: { marginBottom: 33 / ratio },
  RegisterButton: { marginBottom: 22 / ratio, marginTop: 155 / ratio },
  registerMsg: { textAlign: "center" },
  registerAction: { textTransform: "uppercase" }
});
