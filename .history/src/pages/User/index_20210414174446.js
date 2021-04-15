import { Container, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import GrowCard from '../../components/Card';


export default function User() {
    const user = useSelector(s => s.user);

    const [users,setUsers] = useState(null);

    async function buscarDados(){

     const lista = []  ; 
        const data = await api.getUsers();

        data.results.forEach(el =>{
            lista.push(
                < GrowCard />
            )
        });

        setUsers(lista);

    }

    useEffect(() => {
        buscarDados()
    }, [])

    return(
        <Container>
            <Typography variant="h1" component="h1">
                Página protegida
            </Typography>
            <Typography component="h2">
                Olá, Visitante
               <div>{users}</div>
            </Typography>            
        </Container>
    );
}