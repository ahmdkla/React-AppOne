import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  buttonMargin: {
    margin: "0 1.5em"
  },
  bgGr: {
    backgroundColor: "linear-gradient(to right bottom, #430089, #82ffa1)"
  }
}));

function Header(props) {
  const classes = useStyles();

  const logOut = () => {
    localStorage.isLogin = false;
    props.history.push("/signIn");
  };

  return (
    <AppBar position="fixed" className={classes.bgGr}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Learning React
        </Typography>
        <Button
          className={classes.buttonMargin}
          color="inherit"
          component={Link}
          to={"/"}
        >
          Home
        </Button>
        <Button
          className={classes.buttonMargin}
          color="inherit"
          component={Link}
          to={"/About"}
        >
          About
        </Button>
        <Button
          className={classes.buttonMargin}
          color="inherit"
          component={Link}
          to={"/Contact"}
        >
          Contact
        </Button>
        <Button
          className={classes.buttonMargin}
          color="inherit"
          component={Link}
          to={"/users"}
        >
          User
        </Button>
        <Button
          className={classes.buttonMargin}
          color="inherit"
          href="#/"
          onClick={logOut}
          style={{backgroundColor:'maroon'}}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);
