import React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  Link,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/logo.svg';
import RegisterBackground from '../../assets/background.svg';
import './Register.css';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#F3EFF5',
  },
  imageRegister: {
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${RegisterBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(148, 236, 190, 0.80)',
    color: '#FFFFFF',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    margin: theme.spacing(2, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 2, 4, 2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
  link: {
    justifyContent: 'center',
  },
  boxPhrase: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    margin: theme.spacing(0, 10),
    textShadow: '0.5px 0.5px 1px #000',
  },
  mainPhrase: {
    fontWeight: 500,
    textAlign: 'center',
  },
  secundaryPhrase: { fontWeight: 700 },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={Logo} alt="Logo Yoda - Bank" width="58" height="60" />
          <Typography component="h1" variant="h5">
            Você para a força, deve entrar
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nome"
              label="Nome"
              name="nome"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cpfCNPJ"
              label="CPF/CNPJ"
              name="cpfCNPJ"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmarSenha"
              label="Confirmar Senha"
              type="password"
              id="confirmarSenha"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={`${classes.submit}`}
            >
              CADASTRAR
            </Button>
            <Grid container className={classes.link}>
              <Grid item>
                <Link href="/login" variant="body2">
                  {'Já sou da força'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        className={`${classes.imageRegister}`}
      >
        <div className={classes.overlay}>
          <div className={classes.boxPhrase}>
            <Typography
              component="h1"
              variant="h2"
              className={classes.mainPhrase}
            >
              Faça ou não
              <br />
              faça,
              <br />
              tentativa não <br />
              há!
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
