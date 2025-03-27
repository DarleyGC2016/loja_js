"use client";
import { Button, FormControlLabel, Switch, TextField, Typography } from "@mui/material";
import { userSchema, UserSchema } from "@/model/model";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const FomularioCadastro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserSchema>({
    mode: "all",
    resolver: zodResolver(userSchema)
  })

  const handleUser = (data: UserSchema) => {
    console.log("User data: ", data);

  }

  return (
    <form
      onSubmit={handleSubmit(handleUser)}
    >
      <Typography variant="h3" align="center" component="h1">
          Cadastro da Loja
      </Typography>
      <TextField
        id="name"
        label="Nome"
        {...register("name")}
        fullWidth
      />
      <TextField
        id="lastName"
        label="sobreNome"
        {...register("lastName")}
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        {...register("cpf")}
        fullWidth
      />


      <FormControlLabel
        control={
          <Switch
            {...register("prom")}
            color="success"
          />
        }
        label="Promoções"
        id="promocoes"
      />

      <FormControlLabel
        control={
          <Switch
            {...register("news")}
            color="error"
          />
        }
        label="Novidades"
        id="novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        <Link href="/">Cadastrar</Link>
      </Button>
    </form>
  );
}

export default FomularioCadastro;
