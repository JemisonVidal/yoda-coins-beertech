import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  CssBaseline,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LocalStorageActions from "../../store/actions/LocalStorageActions";

import Logo from "../../assets/logo-white.svg";
import ToggleDrawer from "../toggleDrawer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "70px",
  },
  headerWrapper: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
  },
  paper: {
    display: "flex",
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "70px",
    padding: theme.spacing(1),
    width: "30%",
  },
  paperSecond: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "70px",
    padding: theme.spacing(2),
    width: "70%",
  },
  logout: {
    width: "50px",
    marginLeft: "10px",
    backgroundColor: "#4C2A85",
  },
  logo: {
    marginRight: "20px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:1000px)");
  const history = useHistory();

  const { userReducers }: any = useSelector((state) => state);

  async function remove() {
    dispatch({
      type: LocalStorageActions.REMOVE_LOCAL_STORAGE,
      state: "",
    });
    history.push("/login");
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={12} component={Paper} elevation={6} square>
        <div className={classes.headerWrapper}>
          <Box className={classes.paper} width="50%">
            <ToggleDrawer />
            <img src={Logo} alt="Logo" />
            {matches && (
              <Typography component="h1" variant="h5">
                Yoda Coins Beer
              </Typography>
            )}
          </Box>
          <Box className={classes.paperSecond} width="50%">
            <p>
              Olá, <strong>{userReducers.nome}</strong>
            </p>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.logout}
              onClick={remove}
            >
              Sair
            </Button>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
