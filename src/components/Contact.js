import React from "react";
import About from "./About";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = new makeStyles(theme => ({
  paper: {
    background: "rgb(255,255,255,.5)",
    padding: "5em",
    textAlign: "center"
  }
}));

export default function Contact() {
  let classes = useStyles();
  return (
    <Container className={classes.paper}>
      <Typography variant="h1" component="h2">
        Ini adalah Contact Page
      </Typography>
      <About />
    </Container>
  );
}
