import React from "react";
import { Redirect } from "react-router-dom";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

let useStyles = new makeStyles(theme => ({
  paper: {
    background: "rgb(255,255,255,.5)",
    padding: "5em",
    textAlign: "center"
  }
}));

export default function Home() {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  let classes = useStyles();
  return (
    <div>
      {isLogin ? (
        <Container className={classes.paper}>
          <Typography variant="h1" component="h2">
            Ini adalah Home Page
          </Typography>
        </Container>
      ) : (
        <Redirect to="/signin" />
      )}
    </div>
  );
}
