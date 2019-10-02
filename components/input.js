import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import Text from "./text";
import { ratio, colors, fonts } from "../constants/theme";

export default class Input extends React.Component {
  renderIcon(icon) {
    return (
      <View
        style={{
          width: "100%",
          position: "relative"
        }}
      >
        <Image
          style={{
            height: 18,
            width: 18,
            resizeMode: "contain",
            position: "absolute",
            right: 0 + 60 / ratio,
            top: -20 - 37 / ratio
          }}
          source={icon}
        ></Image>
      </View>
    );
  }

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
    const { type, secure, icon } = this.props;

    switch (type) {
      case "email":
        return (
          <View style={{ marginBottom: 106 / ratio }}>
            {this.renderLabel()}
            {this.renderTextInput("Your email...", "email-address")}
            {icon && this.renderIcon(icon)}
          </View>
        );
      case "password":
        return (
          <View style={{}}>
            {this.renderLabel()}
            {this.renderTextInput("Your password...", "default", secure)}
            {icon && this.renderIcon(icon)}
          </View>
        );

      default:
        return this.renderTextInput("Some info...", "default");
    }
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderColor: colors.grey,
    paddingBottom: 30 / ratio,
    paddingHorizontal: 0,
    color: colors.grey,
    fontFamily: "regular",
    ...fonts.label
  }
});
