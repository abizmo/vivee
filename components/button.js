import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { theme } from "../constants";
const { colors, fonts } = theme;

export default class Button extends React.Component {
  render() {
    const {
      primary,
      facebook,
      google,
      large,
      medium,
      rounded,
      squared,
      shadowed,
      style,
      onPress
    } = this.props;

    const buttonStyles = [
      styles.button,
      primary && styles.primaryButton,
      facebook && styles.facebookButton,
      google && styles.googleButton,
      large && styles.large,
      medium && styles.medium,
      rounded && styles.rounded,
      squared && styles.squared,
      shadowed && styles.shadowed,
      style
    ];
    const labelStyles = [
      primary && styles.primaryLabel,
      facebook && styles.facebookLabel,
      google && styles.googleLabel
    ];

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Text style={labelStyles}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 45 / 3,
    alignItems: "center"
  },
  primaryButton: {
    backgroundColor: colors.primary
  },
  facebookButton: {
    backgroundColor: colors.blue,
    elevation: 10 / 3
  },
  googleButton: {
    backgroundColor: colors.white,
    elevation: 10 / 3
  },
  primaryLabel: {
    color: colors.white,
    textTransform: "uppercase",
    fontFamily: "semibold",
    ...fonts.header
  },
  facebookLabel: {
    color: colors.white,
    fontFamily: "regular",
    ...fonts.caption
  },
  googleLabel: {
    color: colors.black,
    fontFamily: "regular",
    ...fonts.caption
  },
  medium: {
    width: 640 / 3
  },
  large: {
    width: 950 / 3
  },
  rounded: {
    borderRadius: 83 / 3
  },
  squared: {
    borderRadius: 10 / 3
  },
  shadowed: {
    elevation: 20 / 3
  }
});
