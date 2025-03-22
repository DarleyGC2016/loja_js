"use client"
import FomularioCadastro from "@/components/FomularioCadastro/FomularioCadastro";
import { Component } from "react"
import { Container, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import { IUsuario, IValidacao } from "@/model/model";


class App extends Component {
  render() {

    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant="h3" align="center" component='h1'>Cadastro da Loja</Typography>
        <FomularioCadastro
          aoEnviar={aoEnviarForm}
          validarCPF={validaCpf}
          validarNome={validaNome}
          validarSobrenome={validaSobrenome} />
      </Container>
    );
  }
}

const aoEnviarForm = (dados: IUsuario): void => {
  console.log(dados);

}

function validaCpf(cpf: string): IValidacao {
  if (cpf.length != 11) {
    return { valido: false, texto: "CPF deve conter 11 digitos!" }
  } else {
    return { valido: true, texto: "" }
  }
}

const validaNome = (nome: string): IValidacao => {
  if (nome.length >= 13) {
    return { valido: false, texto: "Nome deve conter 12 caracter!" }
  } else {
    return { valido: true, texto: "" }
  }
}

const validaSobrenome = (sobreNome: string): IValidacao => {
  if (sobreNome.length < 14 || sobreNome.length > 50) {
    return { valido: false, texto: "Sobrenome deve conter 18 caracter!" }
  } else {
    return { valido: true, texto: "" }
  }
}

export default App