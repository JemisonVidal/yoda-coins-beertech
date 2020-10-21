import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  CircularProgress,
} from "@material-ui/core/";
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CREATE_CONTA } from "../../APIs/APIConta";
import Logo from "../../assets/logo.svg";
import RegisterBackground from "../../assets/background.svg";
import "./Register.css";
import useForm from "../../Hooks/useForm";
import EFieldForm from "../../Enums/EFieldForm";
import useFetch from "../../Hooks/useFetch";
import Error from "../../components/error/Error";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#F3EFF5",
  },
  imageRegister: {
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${RegisterBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(148, 236, 190, 0.80)",
    color: "#FFFFFF",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    margin: theme.spacing(2, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4, 2, 4, 2),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
  link: {
    justifyContent: "center",
  },
  boxPhrase: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    margin: theme.spacing(0, 10),
    textShadow: "0.5px 0.5px 1px #000",
  },
  mainPhrase: {
    fontWeight: 500,
    textAlign: "center",
  },
  secundaryPhrase: { fontWeight: 700 },
}));

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();

  const { loading, error, request } = useFetch();
  const name = useForm(EFieldForm.text);
  const email = useForm(EFieldForm.email);
  const cpfCNPJ = useForm(EFieldForm.text);
  const password = useForm(EFieldForm.password);
  const confirmPassword = useForm(EFieldForm.password);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      (name.validate(),
      email.validate(),
      cpfCNPJ.validate(),
      cpfCNPJ.validate(),
      password.validate(),
      password.value === confirmPassword.value)
    ) {
      //TODO: Solicitar ao backend a validação de senha/confirmar senha
      //TODO: Será possivel qualquer um adicionar perfil adm ?
      const { url, options } = CREATE_CONTA({
        nome: name.value,
        email: email.value,
        cpf: cpfCNPJ.value,
        senha: password.value,
        perfil: 1,
      });

      const { response } = await request(url, options);
      if (response?.ok) return history.push("/login");
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={Logo} alt="Logo Yoda - Bank" width="58" height="60" />
          <Typography component="h1" variant="h5">
            Você para a força, deve entrar
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nome"
              label="Nome"
              name="nome"
              autoFocus
              {...name}
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
              {...email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cpfCNPJ"
              label="CPF/CNPJ"
              name="cpfCNPJ"
              {...cpfCNPJ}
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
              {...password}
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
              {...confirmPassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={`${classes.submit}`}
            >
              {loading ? <CircularProgress color="secondary" /> : "CADASTRAR"}
            </Button>
            <Error error={error} />
            <Grid container className={classes.link}>
              <Grid item>
                <Link to="/login">{"Já sou da força"}</Link>
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
