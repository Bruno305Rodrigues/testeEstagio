import { Container} from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../services/api';
import { Estrutura} from './style';
import SearchAppBar from '../../components/Menu';
import CardFilme from '../../components/Card'



export default function User() {

  
  

  
    const [users,setUsers] = useState(null);

    function alterarTela(valor) {
        setUsers(valor)
    }

   

    async function buscarDados(){

     const lista = []  ; 
    

        const data = await api.getUsers();

       ;

        data.results.forEach(el =>{
            lista.push(
               <CardFilme el={el} />
            )
        });

        setUsers(lista);

    }

    useEffect(() => {
        buscarDados()
    }, [])

    return(
        <Container>
            
            <SearchAppBar metodo={alterarTela} />
               <Estrutura>{users}</Estrutura>
                       
        </Container>
    );
}