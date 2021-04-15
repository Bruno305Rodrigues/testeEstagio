import { Corpo, Imagem, Nota, Titulo } from '../User/style';
import { Button, CardActionArea, CardActions, CardContent,  Container} from '@material-ui/core';


export default function Detalhe(){

   return (


<Corpo>
<CardActionArea>
  <Imagem
   
    
  />
  <CardContent>
    <Titulo>
      { "(Titulo não informado)"}
    </Titulo>
    
  </CardContent>
</CardActionArea>
<CardActions>
  <Nota >
    
  </Nota>
  <Button   size="small" color="primary">
    Detalhes
  </Button>
</CardActions>
</Corpo>
   )

}
