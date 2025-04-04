"use client";
import { TextField } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type InputTextProps<T extends FieldValues> = {
  id: string,
  name: Path<T>,
  label: string,
}

export default function InputText<T extends FieldValues>({ id, name, label }: InputTextProps<T>) {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return <TextField
          id={id}
          label={label}
          {...field}
          error={!!error}
          helperText={error?.message}

        />;
      }}
    />
  );
};
