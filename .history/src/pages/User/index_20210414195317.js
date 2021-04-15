import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import { Corpo, Imagem, Estrutura, Nota } from './style';



export default function User() {

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });

    const user = useSelector(s => s.user);
    const classes = useStyles();

    const [users,setUsers] = useState(null);

    async function buscarDados(){

     const lista = []  ; 

     const linkImg = 'https://image.tmdb.org/t/p/w500'
        const data = await api.getUsers();

       ;

        data.results.forEach(el =>{
            lista.push(
                <Corpo>
      <CardActionArea>
        <Imagem
         
          img src = {linkImg + el.poster_path}
        />
        <CardContent>
          <Titulo gutterBottom variant="h5" component="h2">
            {el.title}
          </Titulo>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Nota >
          {el.vote_average}
        </Nota>
        <Button size="small" color="primary">
          Detalhes
        </Button>
      </CardActions>
    </Corpo>
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
               <Estrutura>{users}</Estrutura>
            </Typography>            
        </Container>
    );
}