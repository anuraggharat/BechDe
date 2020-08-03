import React, { useState } from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppInput({ iconName, ...otherProps }) {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        size={25}
        color={colors.black}
        style={styles.icon}
      />
      <TextInput {...otherProps} style={styles.textInput} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.white,
    alignItems: "center",
    padding: 10,
    borderRadius: 25,
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
  },
});
