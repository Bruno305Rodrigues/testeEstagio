import { Corpo, Imagem, Nota, Titulo } from './style';
import { Button, CardActionArea, CardActions, CardContent,  } from '@material-ui/core';
import {  useDispatch } from 'react-redux';
import { add } from '../../store/modules/filme/action';
import { Data } from '../../pages/Detalhe/styleDetalhe';


export default function CardFilme(props) {

  const dispatch = useDispatch()
    function addCart(){
      dispatch(add({
          filme: props.el,
          
          
          
  
      }))
    }
  function TrocaPagina() {
    window.location="/detalhe"
    addCart();
    
  }
    
   
       const linkImg = 'https://image.tmdb.org/t/p/w500'

       const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    let data = new Date(props.el.release_date);
    let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));
    if(!props.el.release_date){
      dataFormatada = "(Data não informada)";
    }


   
    return (
      
        <Corpo key={props.el.title}>
      <CardActionArea>
        <Imagem
         
          img src = {linkImg + props.el.poster_path}
        />
        <CardContent>
          <Titulo> 
           {props.el.title || "(Titulo não informado)"}
          </Titulo>
          <Data>{dataFormatada} </Data>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Nota nota={props.el.vote_average}>
          {props.el.vote_average}
        </Nota>
        <Button  size="small" color="primary" onClick={TrocaPagina}>
          Detalhes
        </Button>
      </CardActions>
    </Corpo>
    )
}