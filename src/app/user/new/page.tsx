"use client"
import FomularioCadastro from "@/components/FomularioCadastro/FomularioCadastro";
import { Container } from "@mui/material";



export default function FormUsuario()  {
  return (
    <Container component="article" maxWidth="sm">
      <FomularioCadastro/>
    </Container>
  );
};