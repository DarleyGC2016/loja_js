import { boolean, string, z } from "zod";

export interface IUsuario {
  nome: string;
  sobrenome: string;
  cpf: string;
  promocoes: boolean;
  novidades: boolean;
}

export interface IErros {
  nome: { valido: boolean; texto: string };
  sobrenome: { valido: boolean; texto: string };
  cpf: { valido: boolean; texto: string };
}

export interface IValidacao {
  valido: boolean;
  texto: string;
}

export interface IFunctions {
  aoEnviar: (dados: IUsuario) => void;
  validarCPF: (cpf: string) => IValidacao;
  validarNome: (nome: string) => IValidacao;
  validarSobrenome: (sobreNome: string) => IValidacao;
}

export const userSchema = z.object({
  name: string().min(3, "Nome tem que ter no minimo de 3 letras").max(12,"Nome tem que ter no máximo de 12 letras"),
  lastName: string().min(4, "Sobrenome tem que ter no minimo de 4 letras").max(19,"Sobrenome tem que ter no máximo de 19 letras"),
  cpf: string().min(11, "CPF tem 11 digitos").nonempty("Campo não pode ser vazio!"),
  news: boolean(),
  prom: boolean(),
})

export type UserSchema = z.infer<typeof userSchema>