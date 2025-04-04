"use client";
import { InputSwitchProps } from "@/types/types";
import { Switch, FormControlLabel } from "@mui/material";

import { Controller, FieldValues, useFormContext } from "react-hook-form";

export default function InputSwitch<T extends FieldValues>({ id, name, label, color }: InputSwitchProps<T>) {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => {
                return <FormControlLabel
                    control={
                        <Switch
                            {...field}
                            name={name}
                            color={color}
                        />
                    }
                    label={label}
                    id={id}
                />
            }
            }
        />
    )
}