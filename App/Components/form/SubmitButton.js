import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

export default function SubmitButton({ title = "Login" }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton text={title} onPress={handleSubmit} />;
}
