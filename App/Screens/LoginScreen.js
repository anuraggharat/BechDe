import React from "react";
import * as Yup from "yup";
import { View, Text, StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import Screen from "../Components/Screen";
import AppInput from "../Components/AppInput";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";

const validationScheme = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationScheme}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <View>
              <AppInput
                iconName="email"
                autoCapitalize="none"
                placeholder="Email Address"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
              />
              <AppText style={{ color: "red" }}>{errors.email}</AppText>
              <AppInput
                iconName="lock"
                autoCapitalize="none"
                placeholder="Password"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
              />
              <AppText style={{ color: "red" }}>{errors.password}</AppText>

              <AppButton text="Login" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
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
