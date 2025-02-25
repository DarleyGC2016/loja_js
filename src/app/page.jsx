"use client"
import FomularioCadastro from "@/components/FomularioCadastro/FomularioCadastro";
import { Component } from "react"
import { Container, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
class App extends Component {
  render() {

    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant="h3" align="center" component='h1'>Cadastro da Loja</Typography>
        <FomularioCadastro aoEnviar={ aoEnviarForm } />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App