"use client"
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';

function FomularioCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    return (
        <form onSubmit={event => {
            event.preventDefault(); // preventDefault() - serve para não recarregar a página.
            console.log(nome, sobrenome);
            console.log("promocoes: ", promocoes);

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