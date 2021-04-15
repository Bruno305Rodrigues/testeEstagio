import { Container, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';
export default function User() {
    const user = useSelector(s => s.user);

    const [user,setUsers] = useState(null);

    async function buscarDados(){
        cont data = await api.getUsers();
    }

    return(
        <Container>
            <Typography variant="h1" component="h1">
                Página protegida
            </Typography>
            <Typography component="h2">
                Olá, Visitante
                <ul>
                </ul>
            </Typography>            
        </Container>
    );
}