import React from "react";
import * as Yup from "yup";
import { View, StyleSheet, Image } from "react-native";
import Screen from "../Components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../Components/form";

const validationScheme = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function RegisterScreen() {
  return (
    <Screen>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationScheme={validationScheme}
      >
        <View>
          <Text>Register</Text>
          <AppFormField
            name="email"
            iconName="email"
            autoCapitalize="none"
            placeholder="Email Address"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          <AppFormField
            name="password"
            iconName="lock"
            autoCapitalize="none"
            placeholder="Password"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry={true}
          />
          <SubmitButton />
        </View>
      </AppForm>
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
