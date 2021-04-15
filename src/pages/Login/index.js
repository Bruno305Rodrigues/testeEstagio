import { Button, Grid, TextField, Typography } from '@material-ui/core';

export default function Login() {
    return (
        <Grid container justify="center" direction="column" align="center">
            <form>
                <Grid item style={{ margin: '2rem 0rem 3rem 0rem' }}>
                    <Typography variant="h4">
                        Login
                    </Typography>
                </Grid>
                <Grid item style={{ margin: '1rem 0rem 1rem 0rem' }}>
                    <TextField label="E-mail" />
                </Grid>
                <Grid item style={{ margin: '1rem 0rem 1rem 0rem' }}>
                    <TextField label="Senha" 
                               type="password" />
                </Grid>
                <Grid item style={{ margin: '4rem 0rem 2rem 0rem' }}>
                    <Button type="submit">
                        <Typography>Entrar</Typography>
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
};