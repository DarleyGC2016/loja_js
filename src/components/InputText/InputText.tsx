"use client";
import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface ICamposProps {
  id: string,
  label: string,
  data: string | number,
  erros: boolean,
  msgError: string,
  change: (event: ChangeEvent<HTMLInputElement>)  => void,
  blur: () => void
}

const InputText = ({ id, label, data, erros, msgError, change, blur }: ICamposProps) => {
  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      margin="normal"
      value={data}
      onChange={change}
      error={erros}
      helperText={msgError}
      onBlur={blur}
      fullWidth
    />
  );
};

export default InputText;
