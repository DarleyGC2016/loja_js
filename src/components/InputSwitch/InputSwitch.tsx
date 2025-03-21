"use client";
import { Switch, FormControlLabel } from "@mui/material";

type ICampos = {
    id: string,
    name: string,
    label: string,
    change: undefined,
    color: undefined,
    checked: boolean
}
const InputSwitch = ({ id, name, label, checked, change, color }: ICampos) => {
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