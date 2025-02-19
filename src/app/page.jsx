"use client"
import FomularioCadastro from "@/components/FomularioCadastro/FomularioCadastro";
import { Component } from "react"
import Container from '@mui/material/Container';

class App extends Component{
  render() {
      
    return (
      <Container component='article' maxWidth='sm'>
        <h1>Cadastro</h1>
        <FomularioCadastro />
      </Container>
    
    );
  }
}

export default App