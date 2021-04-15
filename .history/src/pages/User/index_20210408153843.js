import { Container, Typography } from '@material-ui/core';

export default function User() {
    return(
        <Container>
            <Typography variant="h1" component="h1">
                Página protegida
            </Typography>
            <Typography component="h2">
                Olá, Visitante
                <ul>
                </ul>
            </Typography>            
        </Container>
    );
}