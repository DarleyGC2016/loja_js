"use client";
import { InputTextProps } from "@/types/types";
import { TextField } from "@mui/material";
import { Controller, FieldValues, useFormContext } from "react-hook-form";

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
