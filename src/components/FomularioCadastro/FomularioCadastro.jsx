"use client"
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';

function FomularioCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    return (
        <form onSubmit={event => {
            event.preventDefault(); // preventDefault() - serve para não recarregar a página.
            console.log(nome, sobrenome);
        }}>
            <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                margin='normal'
                value={nome}
                onChange={event => {
                    let tempNome = event.target.value;
                    if (tempNome.length >= 3) {
                        tempNome = tempNome.substring(0, 3);
                    }
                    setNome(tempNome);
                }}
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
                fullWidth />

            <FormControlLabel
                control={
                    <Switch
                        name='promocoes'
                        defaultChecked
                        color='primary' />
                }
                label="Promoções" />

            <FormControlLabel
                control={
                    <Switch
                        name='novidades'
                        defaultChecked
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