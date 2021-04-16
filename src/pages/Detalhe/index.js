import { Button, CardActionArea, CardActions, CardContent, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {  Imagem, Nota } from '../../components/Card/style';
import { CorpoDetalhe, Data, EstruturaDetalhe, Sinopse, Titulo, TituloSinopse } from './styleDetalhe';

export default function Detalhes(props){

    const filmes = useSelector(store => store.filme.filme)
    console.log("LOG",filmes)
    const linkImg = 'https://image.tmdb.org/t/p/w500'
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    let data = new Date(filmes.filme.release_date);
    let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));

    function Sair() {
      window.location = '/';
    }

    

    return (
      
        <Container>
       <EstruturaDetalhe>
       <CorpoDetalhe key={filmes.filme.title}>
      <CardActionArea>
        <Imagem
         
          img src = {linkImg + filmes.filme.poster_path}
        />
        <CardContent>
          <Titulo>
            {filmes.filme.title || "(Titulo não informado)"}
          </Titulo>
          <Data> {dataFormatada}</Data>
          <TituloSinopse> Sinopse:</TituloSinopse>
          <Sinopse>{filmes.filme.overview}</Sinopse>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Nota nota={filmes.filme.vote_average}>
          {filmes.filme.vote_average}
        </Nota>
        
        <Button  size="small" color="primary" onClick={Sair}>
          Voltar
        </Button>
      </CardActions>
    </CorpoDetalhe>
    </EstruturaDetalhe>
        </Container>
    )
}