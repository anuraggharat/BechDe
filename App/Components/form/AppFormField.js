import React from "react";
import ErrorMessageComponent from "./ErrorMessageComponent";
import AppInput from "../AppInput";
import { useFormikContext } from "formik";

export default function AppFormField({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <>
      <AppInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />
      <ErrorMessageComponent error={errors[name]} visible={touched[name]} />
    </>
  );
}
