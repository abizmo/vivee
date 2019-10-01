import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./text";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text header fontFamily="bold" color="white" style={styles.title}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: { textTransform: "uppercase", letterSpacing: 3 }
});
