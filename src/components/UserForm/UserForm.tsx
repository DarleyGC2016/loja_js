"use client";
import { Button, Stack, Typography } from "@mui/material";
import { UserSchema } from "@/model/model";
import InputText from "../InputText/InputText";
import InputSwitch from "../InputSwitch/InputSwitch";
// import Link from "next/link";

const UserForm = () => {

  return (
    <Stack sx={{ gap: 2 }}>

      <Typography variant="h3" align="center" component="h1">
        Cadastro da Loja
      </Typography>
      <InputText<UserSchema> name="name" label="Nome" />
      <InputText<UserSchema> name="lastName" label="Sobrenome" />
      <InputText<UserSchema> name="cpf" label="CPF" />

      <div>
        <InputSwitch<UserSchema> name="prom" label="Promoções" color="success"/>
        <InputSwitch<UserSchema> name="news" label="Novidades" color="error"/>
      </div>

      <Button type="submit" variant="contained" color="primary">
        {/* <Link href="/">Cadastrar</Link> */}
        Salvar
      </Button>
    </Stack>

  );
}

export default UserForm;
