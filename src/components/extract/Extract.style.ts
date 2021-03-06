import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F3EFF5",
  },
  image: {
    [theme.breakpoints.down(400)]: {
      opacity: "0",
      position: "absolute",
    },
  },
  list: {
    backgroundColor: "white",
    width: "100%",
  },
  listItem: {
    textAlign: "right",
    "& span": {
      wordBreak: "break-word",
    }
  },
  thumbnail: {
    width: "100px",
  },
  paper: {
    borderRadius: "10px",
  },
  page: {
    margin: "10px",
  },
  text:{
    marginBottom: theme.spacing(2),
    fontWeight: 'bolder',
  }
}));

export default useStyles;
