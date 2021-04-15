import { Button, CardActionArea, CardActions, CardContent,  Container} from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../services/api';
import { Corpo, Imagem, Estrutura, Nota, Titulo } from './style';
import SearchAppBar from '../../components/Menu';



export default function User() {

  
  
  

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
          <Titulo>
            {el.title || "(Titulo não informado)"}
          </Titulo>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Nota nota={el.vote_average}>
          {el.vote_average}
        </Nota>
        <Button  size="small" color="primary">
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
            
            <SearchAppBar />
               <Estrutura>{users}</Estrutura>
                       
        </Container>
    );
}