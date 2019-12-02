import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonMargin:{
    margin: '0 3em',
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Learning React
        </Typography>
        <Button className={ classes.buttonMargin } color="inherit" component={Link} to={"/signUp"}>Sign Up</Button>
        <Button className={ classes.buttonMargin } color="inherit" component={Link} to={"/signIn"}>Sign In</Button>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);
