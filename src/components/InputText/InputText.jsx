import { TextField } from "@mui/material";
const InputText = ({ id, label, data, set }) => {
  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      margin="normal"
      value={data}
      onChange={(event) => {
        set(event.target.value);
      }}
      fullWidth
    />
  );
};

export default InputText;
