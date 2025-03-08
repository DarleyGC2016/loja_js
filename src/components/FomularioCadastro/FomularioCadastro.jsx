"use client";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
import { useState } from "react";
import InputText from "../InputText/InputText";
// function FomularioCadastro(props) {
function FomularioCadastro({ aoEnviar, validarCPF }) {
  // desconstruindo o propos dessa forma - FomularioCadastro({aoEnviar})
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // preventDefault() - serve para não recarregar a página.
        aoEnviar({
          name: nome,
          lastName: sobrenome,
          cpf,
          promotions: promocoes,
          news: novidades,
        });
        console.log("teste: ", teste);
      }}
    >
      <InputText id="nome" label="Nome" data={nome} set={setNome} />

      <InputText
        id="sobrenome"
        label="Sobrenome"
        data={sobrenome}
        set={setSobrenome}
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={(event) => {
          const ehValido = validarCPF(cpf);
          setErros({ cpf: ehValido });
        }}
        fullWidth
      />

      <FormControlLabel
        control={
          <Switch
            name="promocoes"
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            color="primary"
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            name="novidades"
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FomularioCadastro;
