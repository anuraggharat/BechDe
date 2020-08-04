import React from "react";
import { View, Text } from "react-native";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import ErrorMessageComponent from "./ErrorMessageComponent";

export default function AppFormPicker({ items, name, placeholder }) {
  const {
    errors,
    setFieldTouched,
    touched,
    setFieldValue,
    values,
  } = useFormikContext();

  return (
    <>
      <AppPicker
        icon="apps"
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedCategory={values[name]}
      />
      <ErrorMessageComponent error={errors[name]} visible={touched[name]} />
    </>
  );
}
