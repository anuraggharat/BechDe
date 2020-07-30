import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/welcome.jpg")}
      style={styles.imageBackground}
    >
      <Text>Hii</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
});
