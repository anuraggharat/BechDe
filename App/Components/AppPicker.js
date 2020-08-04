import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  Button,
  Picker,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

export default function AppPicker({
  iconName,
  placeholder,
  items,
  onSelectItem,
  selectedCategory,
}) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModal(true);
        }}
      >
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={iconName}
            size={25}
            color={colors.black}
            style={styles.icon}
          />
          <AppText style={styles.text}>
            {selectedCategory ? selectedCategory : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.black}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modal} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModal(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModal(false);
                  onSelectItem(item.label);
                }}
              ></PickerItem>
            )}
          />
        </Screen>
      </Modal>
    </>
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
  },
  icon: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    color: colors.black,
    flex: 1,
  },
});
