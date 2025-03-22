export interface IUsuario {
    nome: string,
    sobrenome: string,
    cpf: string,
    promocoes: boolean,
    novidades: boolean
}

export interface IErros {
    nome: { valido: boolean, texto: string },
    sobrenome: { valido: boolean, texto: string },
    cpf: { valido: boolean, texto: string }
}

export interface IValidacao {
    valido: boolean,
    texto: string
}