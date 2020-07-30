import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/welcome.jpg")}
      style={styles.imageBackground}
    >
      <View style={styles.logoContainer}>
        <Image
          height="100"
          width="100"
          source={require("../assets/logo.png")}
        ></Image>
        <Text>Bech De!!!</Text>
      </View>
      <View style={styles.registerbutton}></View>
      <View style={styles.loginbutton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
  },
  registerbutton: {
    height: 70,
    width: "100%",
    backgroundColor: "red",
  },
  loginbutton: {
    height: 70,
    width: "100%",
    backgroundColor: "orange",
  },
});
