import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GrowCard from '../../components/Card';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const tiers = [
    {
        title: 'Básico',
        price: 29.99,
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Quero o meu',
        buttonVariant: 'outlined',
    },
    {
        title: 'Top',
        subheader: 'Most popular',
        price: 87.66,
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Vou aproveitar',
        buttonVariant: 'contained',
    },
    {
        title: 'Topzão',
        price: 99.98,
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Só se for agora',
        buttonVariant: 'outlined',
    },
];
const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

export default function Home() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>Growdev</Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>Features</Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>Enterprise</Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>Support</Link>
                    </nav>
                    <Button href="#" color="primary" variant="outlined" className={classes.link}>Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Preços</Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">Quickly build an effective pricing table for your potential customers with this layout. It&apos;s built with default Material-UI components with little customization.</Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                       <GrowCard key={tier.title} tier={tier} classes={classes} />
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}