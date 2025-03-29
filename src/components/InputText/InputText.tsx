"use client";
import { TextField } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>,
  label: string,
}

export default function InputText<T extends FieldValues>({ name, label }: Props<T>) {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return <TextField
          label={label}
          {...field}
          error={!!error}
          helperText={error?.message}

        />;
      }}
    />
  );
};
