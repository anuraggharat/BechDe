import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessageComponent from "./ErrorMessageComponent";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  console.log(values);
  console.log(name);

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item.label)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedCategory={values[name]}
        width={width}
      />
      <ErrorMessageComponent error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
