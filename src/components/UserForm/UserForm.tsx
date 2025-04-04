"use client";
import { Button, Stack } from "@mui/material";
import InputText from "../InputText/InputText";
import InputSwitch from "../InputSwitch/InputSwitch";
import { UserSchema } from "@/types/types";
// import Link from "next/link";

const UserForm = () => {

  return (
    <Stack sx={{ gap: 2 }}>
      <InputText<UserSchema> id="name" name="name" label="Nome" />
      <InputText<UserSchema> id="lastName" name="lastName" label="Sobrenome" />
      <InputText<UserSchema> id="cpf" name="cpf" label="CPF" />

      <div>
        <InputSwitch<UserSchema> id="promocoes" name="prom" label="Promoções" color="success"/>
        <InputSwitch<UserSchema> id="novidades" name="news" label="Novidades" color="error"/>
      </div>

      <Button type="submit" variant="contained" color="primary">
        {/* <Link href="/">Cadastrar</Link> */}
        Salvar
      </Button>
    </Stack>

  );
}

export default UserForm;
