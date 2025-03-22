"use client";
import { Switch, FormControlLabel, SwitchPropsColorOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { ChangeEvent } from "react";

type ICamposProps = {
    id: string,
    name: string,
    label: string,
    checked: boolean
    change: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void,
    color?: OverridableStringUnion<"primary" | "secondary" | "success" | "error" | "info" | "warning" | "default", SwitchPropsColorOverrides> | undefined
}
const InputSwitch = ({ id, name, label, checked, change, color }: ICamposProps) => {
    return (
        <FormControlLabel
            control={
                <Switch
                    name={name}
                    checked={checked}
                    onChange={change}
                    color={color}
                />
            }
            label={label}
            id={id}
        />
    )
}

export default InputSwitch;