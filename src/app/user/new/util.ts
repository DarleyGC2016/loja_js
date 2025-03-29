import { IUsuario, IValidacao } from "@/model/model";
const list: Array<IUsuario> = [];
export const aoEnviarForm = (dados: IUsuario): void => {

  list.push(dados)
  console.log(list);
};

export function validaCpf(cpf: string): IValidacao {
  if (cpf.length != 11) {
    return { valido: false, texto: "CPF deve conter 11 digitos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

export const validaNome = (nome: string): IValidacao => {
    if (nome.length >= 13) {
        return { valido: false, texto: "Nome deve conter 12 caracter!" };
    } else {
        return { valido: true, texto: "" };
    }
};

export const validaSobrenome = (sobreNome: string): IValidacao => {
    if (sobreNome.length < 14 || sobreNome.length > 50) {
        return { valido: false, texto: "Sobrenome deve conter 18 caracter!" };
    } else {
        return { valido: true, texto: "" };
    }
};
