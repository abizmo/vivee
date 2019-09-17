import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Text from "./text";
import { ratio } from "../constants/theme";

export default class Input extends React.Component {
  renderLabel() {
    const { label } = this.props;
    return (
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
        {label}
      </Text>
    );
  }

  renderTextInput(placeholder, keyboardType, secure) {
    const { value, onChange } = this.props;

    return (
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        style={styles.textInput}
      />
    );
  }

  render() {
    const { type, secure } = this.props;

    switch (type) {
      case "email":
        return (
          <View style={{ marginBottom: 106 / ratio }}>
            {this.renderLabel()}
            {this.renderTextInput("Your email...", "email-address")}
          </View>
        );
      case "password":
        return (
          <View style={{}}>
            {this.renderLabel()}
            {this.renderTextInput("Your password...", "default", secure)}
          </View>
        );

      default:
        return this.renderTextInput("Some info...", "default");
    }
  }
}

const styles = StyleSheet.create({
  textInput: { height: 40, borderColor: "gray", borderWidth: 1 }
});
