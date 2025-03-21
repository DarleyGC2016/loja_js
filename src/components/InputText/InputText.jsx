"use client";
import { TextField } from "@mui/material";
const InputText = ({ id, label, data, erros, msgError, change, blur }) => {
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
