"use client"
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';

// function FomularioCadastro(props) {
function FomularioCadastro({ aoEnviar }) { // desconstruindo o propos dessa forma - FomularioCadastro({aoEnviar})
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })
    return (
        <form onSubmit={event => {
            event.preventDefault(); // preventDefault() - serve para não recarregar a página.
            aoEnviar({
                "name": nome,
                "lastName": sobrenome,
                cpf,
                "promotions": promocoes,
                "news": novidades
            });
        }}>
            <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                margin='normal'
                value={nome}
                onChange={
                    event => {
                        setNome(event.target.value);
                    }
                }
                fullWidth />

            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin='normal'
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
                fullWidth />

            <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                margin='normal'
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={(event) => {
                    setErros({ cpf: { valido: false, texto: "CPF deve conter 11 digitos" } })
                }}
                fullWidth />

            <FormControlLabel
                control={
                    <Switch
                        name='promocoes'
                        checked={promocoes}
                        onChange={
                            (event) => {
                                setPromocoes(event.target.checked)
                            }
                        }
                        color='primary'
                    />
                }
                label="Promoções" />

            <FormControlLabel
                control={
                    <Switch
                        name='novidades'
                        checked={novidades}
                        onChange={
                            (event) => {
                                setNovidades(event.target.checked)
                            }
                        }
                        color='primary' />
                }
                label="Novidades" />

            <Button
                type='submit'
                variant="contained"
                color='primary'>
                Cadastrar
            </Button>

        </form>
    )
}

export default FomularioCadastro;