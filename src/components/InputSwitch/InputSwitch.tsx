"use client";
import { Switch, FormControlLabel, SwitchPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>,
  label: string,
  color?: OverridableStringUnion<"primary" | "secondary" | "success" | "error" | "info" | "warning" | "default", SwitchPropsColorOverrides> | undefined
}

export default function InputSwitch<T extends FieldValues> ({  name, label, color }: Props<T>)  {
    const { control } = useFormContext()
    return (
        <Controller
        control={control}
        name={name}
        render={({ field}) => {
        return <FormControlLabel
            control={
                <Switch
                    {...field}
                    name={name}
                    color={color}
                />
            }
            label={label}
        />}
    }
    />
    )
}