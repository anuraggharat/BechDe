import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export default function AppForm({
  children,
  initialValues,
  onSubmit,
  validationScheme,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationScheme}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
