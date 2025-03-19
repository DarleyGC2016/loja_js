"use client";
import { Button, Switch, FormControlLabel } from "@mui/material";
import { useState } from "react";
import InputText from "../InputText/InputText";

function FomularioCadastro({ aoEnviar, validarCPF, validarNome, validarSobrenome }) {

  const [usuario, setUsuario] = useState({
    nome: '',
    sobrenome: '',
    cpf: '',
    promocoes: true,
    novidades: true
  })
  const [erros, setErros] = useState({
    nome: { valido: true, texto: "" },
    sobrenome: { valido: true, texto: "" },
    cpf: { valido: true, texto: "" }
  });

  const blurNome = (event) => {
    console.log('event: ', event);
    console.log('error: ',erros.nome);
    console.log('v: ',validarNome(usuario.nome));
    
    
    setErros({...erros, nome: validarNome(usuario.nome) })
  }


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // preventDefault() - serve para não recarregar a página.
        aoEnviar({
          name: usuario.nome,
          lastName: usuario.sobrenome,
          cpf: usuario.cpf,
          // promotions: usuario.promocoes,
          // news: usuario.novidades,
        });
      }}
    >
      <InputText
          id="nome"
          label="Nome"
          data={usuario.nome}
          change={(event) => {
            setUsuario({...usuario, nome: event.target.value})
          }}
          erros={!erros.nome.valido}
          msgError={erros.nome.texto}
          blur={(event) => {
            setErros({...erros, nome: validarNome(usuario.nome) })
          }}
        />

        <InputText
        id="sobrenome"
        label="Sobrenome"
        data={usuario.sobrenome}
        change={(event) => {
          setUsuario({...usuario, sobrenome: event.target.value})
        }}
        erros={!erros.sobrenome.valido}
        msgError={erros.sobrenome.texto}
        blur={(event) => {
          setErros({...erros, sobrenome: validarSobrenome(usuario.sobrenome) })
        }}
      />

      <InputText id="cpf"
        label="CPF"
        data={usuario.cpf}
        change={(event) => {
          setUsuario({...usuario, cpf: event.target.value})
        }}
        erros={!erros.cpf.valido}
        msgError={erros.cpf.texto}
        blur={(event) => {
          setErros({...erros, cpf: validarCPF(usuario.cpf) })
        }}
      />
      
      {/* <TextField
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
      /> */}

      {/* <FormControlLabel
        control={
          <Switch
            name="promocoes"
            checked={usuario.promocoes}
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
            checked={usuario.novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            color="primary"
          />
        }
        label="Novidades"
      /> */}

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FomularioCadastro;
