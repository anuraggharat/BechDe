import React from "react";
import * as Yup from "yup";
import { View, StyleSheet, Image } from "react-native";
import Screen from "../Components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../Components/form";
import AppFormPicker from "../Components/form/AppFormPicker";
import CategoryPickerItem from "../Components/CategoryPickerItem";

const validationScheme = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().required().min(5).max(255).label("Description"),
  price: Yup.number().required().label("Price"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const initialValues = {
  title: "",
  description: "",
  price: "",
  category: null,
};

export default function ListingsEditScreen() {
  return (
    <Screen>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationScheme={validationScheme}
      >
        <View>
          <AppFormField name="title" placeholder="Your Product Name" />

          <AppFormField name="description" placeholder="Description" />
          <AppFormField
            name="price"
            placeholder="Amount"
            keyboardType="numeric"
          />
          <AppFormPicker
            items={categories}
            name="category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Category"
            width="50%"
          />
          <SubmitButton title="Post Item" />
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
