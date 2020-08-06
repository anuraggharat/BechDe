import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({ name, bgcolor, width = 50, height = 50 }) {
  return (
    <View
      style={{
        backgroundColor: bgcolor,
        width: width,
        height: height,
        borderRadius: width / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color="#111" size={width / 2} />
    </View>
  );
}
