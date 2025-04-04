import { userSchema } from "@/model/model";
import { FieldValues, Path } from "react-hook-form";
import { z } from "zod";
import { OverridableStringUnion } from "@mui/types";
import { SwitchPropsColorOverrides } from "@mui/material";

export type UserSchema = z.infer<typeof userSchema>

export type InputTextProps<T extends FieldValues> = {
    id: string,
    name: Path<T>,
    label: string,
}

export type InputSwitchProps<T extends FieldValues> = {
    id: string
    name: Path<T>,
    label: string,
    color?: OverridableStringUnion<"primary" | "secondary" | "success" | "error" | "info" | "warning" | "default", SwitchPropsColorOverrides> | undefined
}