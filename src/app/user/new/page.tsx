"use client"

import UserProvider from "@/components/UserProvider/UserProvider";
import { Container } from "@mui/material";

export default function NewUser()  {
  return (
    <Container component="article" maxWidth="sm">
      <UserProvider />
    </Container>
  );
};