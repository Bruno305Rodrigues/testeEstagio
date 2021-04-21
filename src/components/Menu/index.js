import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import CardFilme from '../../components/Card'
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import { Button, InputBase } from '@material-ui/core';
import { CamposMenu, MeuMenu } from './style';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: 'impact',
    boxShadow: '0 3px 5px 2px black',
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();

  const [filme, setFilmes] = useState("")

  const [nome, setNome] = useState("")

  function digitarNome(e) {
    setNome(e.target.value)
  }

  function alterar(e) {

    props.metodo(filme)
  }
  const neww = nome

  const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=c8148d98d2d74fb8f5bb33488e938599&query=${neww}`

  async function buscarDados() {

    const lista = [];
    console.log(baseUrl);

    const data = await axios.get(baseUrl);

    console.log(data)



    data.data.results.forEach(el => {




      lista.push(
        <CardFilme el={el} />

      )
    });


    setFilmes(lista)


    if (data.data.total_pages === 0) {
      alert("Ops! Filme não encontrado!")
      window.location = "/";
    }

  }




  useEffect(() => {

    buscarDados()
  }, [nome])





  return (
    <div>
      <MeuMenu >


        <div>
          <Typography className={classes.title} variant="h3" wrap>
            Top Filmes
          </Typography>
        </div>
        <div>
          <Button variant="contained" color="dark" href='/'>
            Destaques
          </Button>
        </div>
        <CamposMenu>
          <div className={classes.search}>

            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>



            <InputBase
              placeholder="Search…"
              value={nome}
              onChange={digitarNome}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

            
          </div>
          <div>
              <Button  variant="contained" color="dark" onClick={alterar}>
                Pesquisar
                  </Button>
            </div>
        </CamposMenu>
      </MeuMenu>
    </div>
  );
}
