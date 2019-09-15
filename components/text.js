import React from "react";
import { StyleSheet, Text } from "react-native";

import { theme } from "../constants";
const { colors, fonts } = theme;

export default class Typography extends React.Component {
  render() {
    const {
      h1,
      h2,
      header,
      body,
      caption,
      label,
      small,
      smaller,
      fontFamily,
      color,
      style
    } = this.props;

    const textStyles = [
      h1 && fonts.h1,
      h2 && fonts.h2,
      header && fonts.header,
      body && fonts.body,
      caption && fonts.caption,
      label && fonts.label,
      small && fonts.small,
      smaller && fonts.smaller,
      fontFamily && { fontFamily },
      color && { color: colors[color] },
      style
    ];

    return <Text style={textStyles}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({});
