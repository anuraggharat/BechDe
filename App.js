import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Image } from "react-native";

import WelcomeScreen from "./App/Screens/WelcomeScreen";
import ViewImageScreen from "./App/Screens/ViewImageScreen";
import ListingsScreen from "./App/Screens/ListingsScreen";
import ItemScreen from "./App/Screens/ItemScreen";
import MessagesScreen from "./App/Screens/MessagesScreen";
import AccountScreen from "./App/Screens/AccountScreen";
import Screen from "./App/Components/Screen";
import AppInput from "./App/Components/AppInput";
import colors from "./App/config/colors";
import AppPicker from "./App/Components/AppPicker";
import LoginScreen from "./App/Screens/LoginScreen";
import ListingsEditScreen from "./App/Screens/ListingsEditScreen";

import * as ImagePicker from "expo-image-picker";

const categories = [
  {
    name: "furniture",
    value: 1,
  },
  {
    name: "books",
    value: 2,
  },
  {
    name: "household",
    value: 3,
  },
];

export default function App() {
  const [imgUri, setImgUri] = useState(null);

  const requestAccess = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("Permission de Bhosdichya");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      setImgUri(result.uri);
      console.log("====================================");
      console.log(result);
      console.log("====================================");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestAccess();
  }, []);
  return (
    <View style={styles.container}>
      {/* <MessagesScreen /> */}
      {/* <AccountScreen /> */}
      {/* <LoginScreen /> */}
      {/* <ListingsEditScreen imgUri={imgUri} selectImage={selectImage} /> */}
      {/* <ViewImageScreen></ViewImageScreen> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <ListingsScreen /> */}
      {/* <ItemScreen /> */}
      <Button title="Select Image" onPress={selectImage}>
        Select
      </Button>
      <Image style={styles.img} source={{ uri: imgUri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.offwhite,
  },
  img: {
    height: 100,
    width: 100,
  },
});
