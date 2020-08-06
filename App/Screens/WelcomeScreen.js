import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/welcome.jpg")}
      style={styles.imageBackground}
      blurRadius={3}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <Text style={styles.logoText}>Bech De!!!</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* <AppButton
          text="Login"
          onPress={() => navigation.navigate("Login")}
          propsColor="primary"
        />
        <AppButton
          text="Register"
          onPress={() => navigation.navigate("Register")}
          propsColor="secondary"
        /> */}
      </View>
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
    top: 200,
    alignSelf: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoText: {
    color: "white",
    fontSize: 30,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
});
