"use client";
import { Switch, FormControlLabel } from "@mui/material";
import { ChangeEvent } from "react";

type ICamposProps = {
    id: string,
    name: string,
    label: string,
    checked: boolean
    change: (event: ChangeEvent<HTMLInputElement>, checked: boolean) =>void,
}
const InputSwitch = ({ id, name, label, checked, change }: ICamposProps) => {
    return (
        <FormControlLabel
            control={
                <Switch
                    name={name}
                    checked={checked}
                    onChange={change}
                    color="primary"
                />
            }
            label={label}
            id={id}
        />
    )
}

export default InputSwitch;