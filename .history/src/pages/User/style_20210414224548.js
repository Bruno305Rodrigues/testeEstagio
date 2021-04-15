import styled from 'styled-components';

export const Imagem = styled.img `
    width: 100%

`

export const Corpo = styled.div `
    width: 300px;
    box-shadow: 5px 5px 5px 5px black;
    margin: 0 auto;
    margin-top: 20px;
    display:flex;
    flex-direction: column;
    justify-content:space-around;

`;

export const Estrutura = styled.div `
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;


`;

export const Nota = styled.button `
    padding: 15px;
    border-radius: 30px;
    color: ${props => props.nota > 6 ? 'green' : 'red'};
`;

export const Titulo = styled.h1 `
    font-family: roboto;
`;
  
