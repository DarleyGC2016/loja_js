"use client";
import { Component } from "react";
import { Container, Typography } from "@mui/material";

import FormUsuario from "@/pages/Usuario/Cadastro/FormUsuario";
import "@fontsource/roboto/300.css";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">
          Cadastro da Loja
        </Typography>
        <FormUsuario />
      </Container>
    );
  }
}

export default App;
