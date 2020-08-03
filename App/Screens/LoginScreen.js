import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Screen from "../Components/Screen";
import AppInput from "../Components/AppInput";
import AppButton from "../Components/AppButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View>
        <AppInput
          iconName="email"
          autoCapitalize="none"
          placeholder="Email Address"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={(Text) => {
            setEmail(Text);
          }}
        />
        <AppInput
          iconName="lock"
          autoCapitalize="none"
          placeholder="Password"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(Text) => {
            setPassword(Text);
          }}
        />
        <AppButton text="Login" onPress={() => console.log(email, password)} />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginVertical: 50,
  },
});
