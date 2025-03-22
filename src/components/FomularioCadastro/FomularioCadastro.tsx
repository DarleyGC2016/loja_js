"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import InputText from "../InputText/InputText";
import InputSwitch from "../InputSwitch/InputSwitch";
import { IUsuario, IValidacao } from "@/model/model";

interface IFunctions {
  aoEnviar: (dados: IUsuario) => void,
  validarCPF: (cpf: string) => IValidacao,
  validarNome: (nome: string) => IValidacao,
  validarSobrenome: (sobreNome: string) => IValidacao
}

function FomularioCadastro({ aoEnviar, validarCPF, validarNome, validarSobrenome }: IFunctions) {

  const [usuario, setUsuario] = useState<IUsuario>({
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

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // preventDefault() - serve para não recarregar a página.
        const dados: IUsuario = {
          nome: usuario.nome,
          sobrenome: usuario.sobrenome,
          cpf: usuario.cpf,
          promocoes: usuario.promocoes,
          novidades: usuario.novidades
        };

        aoEnviar(dados);
      }}
    >
      <InputText
        id="nome"
        label="Nome"
        data={usuario.nome}
        change={(event): void => {
          setUsuario({ ...usuario, nome: event.target.value })
        }}
        erros={!erros.nome.valido}
        msgError={erros.nome.texto}
        blur={() => {
          setErros({ ...erros, nome: validarNome(usuario.nome) })
        }}
      />

      <InputText
        id="sobrenome"
        label="Sobrenome"
        data={usuario.sobrenome}
        change={(event) => {
          setUsuario({ ...usuario, sobrenome: event.target.value })
        }}
        erros={!erros.sobrenome.valido}
        msgError={erros.sobrenome.texto}
        blur={() => {
          setErros({ ...erros, sobrenome: validarSobrenome(usuario.sobrenome) })
        }}
      />

      <InputText id="cpf"
        label="CPF"
        data={usuario.cpf}
        change={(event) => {
          setUsuario({ ...usuario, cpf: event.target.value })
        }}
        erros={!erros.cpf.valido}
        msgError={erros.cpf.texto}
        blur={() => {
          setErros({ ...erros, cpf: validarCPF(usuario.cpf) })
        }}
      />

      <InputSwitch
        id="promocoes"
        name="promocoes"
        checked={usuario.promocoes}
        change={(event) => {
          setUsuario({ ...usuario, promocoes: event.target.checked });
        }}
        label="Promoções"
      />

      <InputSwitch
        id="novidades"
        name="novidades"
        checked={usuario.novidades}
        change={(event) => {
          setUsuario({ ...usuario, novidades: event.target.checked });
        }}
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FomularioCadastro;
