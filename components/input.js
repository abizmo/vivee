import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default class Input extends React.Component {
  state = {
    isSecure: true
  };
  renderTextInput(placeholder, keyboardType, secure) {
    const { value, onChange } = this.props;

    return (
      <TextInput
        style={styles.textInput}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secure && this.state.isSecure}
      />
    );
  }
  render() {
    const { type } = this.props;

    switch (type) {
      case "email":
        return this.renderTextInput("Your email...", "email-address");
      case "password":
        return this.renderTextInput("Your password...", "default", true);

      default:
        return this.renderTextInput("Some info...", "default");
    }
  }
}

const styles = StyleSheet.create({
  textInput: { height: 40, borderColor: "gray", borderWidth: 1 }
});
