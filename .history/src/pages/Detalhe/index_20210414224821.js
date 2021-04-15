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
  <Button  onClick={detalheDoFilme} size="small" color="primary">
    Detalhes
  </Button>
</CardActions>
</Corpo>