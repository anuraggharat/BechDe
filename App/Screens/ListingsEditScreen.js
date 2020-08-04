import React from "react";
import * as Yup from "yup";
import { View, StyleSheet, Image } from "react-native";
import Screen from "../Components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../Components/form";
import AppFormPicker from "../Components/form/AppFormPicker";

const validationScheme = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().required().min(5).max(255).label("Description"),
  price: Yup.number().required().label("Price"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Camera",
    value: 2,
  },
  {
    label: "Clothing",
    value: 3,
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
            placeholder="Select your Category"
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
