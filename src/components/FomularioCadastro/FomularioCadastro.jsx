"use client"
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';

function FomularioCadastro() {
    const [nome, setNome] = useState("Darley");
    return (
        <form onSubmit={event => {
            event.preventDefault() // preventDefault() - serve para não recarregar a página.
            console.log(nome)
        }}>
            <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                margin='normal'
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                    if (nome.length >= 3) {
                        setNome(nome.substring(0, 3));
                    }
                }}
                fullWidth />

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin='normal' fullWidth />

            <TextField id="cpf" label="CPF" variant="outlined" margin='normal' fullWidth />

            <FormControlLabel control={<Switch name='promocoes' defaultChecked color='primary' />} label="Promoções" />

            <FormControlLabel control={<Switch name='novidades' defaultChecked color='primary' />} label="Novidades" />

            <Button variant="contained" color='primary'>Cadastrar</Button>

        </form>
    )
}

export default FomularioCadastro;