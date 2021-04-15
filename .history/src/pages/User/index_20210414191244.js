import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import { Imagem } from './style';



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
        const data = await api.getUsers();

        const imgUrl = 'https://api.themoviedb.org/3/movie/550';

        data.results.forEach(el =>{
            lista.push(
                <Card className={classes.root}>
      <CardActionArea>
        <Imagem
         
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {el.title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {el.vote_average}
        </Button>
        <Button size="small" color="primary">
          Detalhes
        </Button>
      </CardActions>
    </Card>
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