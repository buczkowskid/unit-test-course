import getFormikStatuses from "@networkraildigitalfactory/react-components/dist/shared/utils/getFormikStatuses";
import { OnChangeCommonType } from "@networkraildigitalfactory/react-components/dist/stories/helpers/types/onChangeCommon.type";
import Input, { IInputProps } from "components/form/Input/Input";
import { Field, FieldProps } from "formik";
import React from "react";

export interface IFormikInputProps extends Omit<IInputProps, "value" | "onChange"> {
  onChange?: OnChangeCommonType;
}

const FormikInput = ({
  name,
  onChange,
  statusesTexts,
  status,
  ...args
}: IFormikInputProps): JSX.Element => (
  <Field name={name}>
    {({ field, meta, form }: FieldProps) => {
      const { statusValue, statuses } = getFormikStatuses({
        name,
        meta,
        form,
        status,
        statusesTexts,
      });

      return (
        <Input
          {...args}
          name={name}
          value={field.value}
          onChange={(e) => {
            form.setFieldTouched(name, true);
            field.onChange(e);

            if (onChange) {
              onChange();
            }
          }}
          statusesTexts={statuses}
          status={statusValue}
        />
      );
    }}
  </Field>
);

export default FormikInput;
