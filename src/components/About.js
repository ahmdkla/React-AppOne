import React from "react";
import ClassComponent from "./ClassComponent";
import Hooks from "./Hooks";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

let useStyles = new makeStyles(theme => ({
  paper: {
    background: "rgb(255,255,255,.5)",
    padding: "5em",
    textAlign: "center"
  },

  incdec: {
    background: "rgb(0,0,0,.5)",
    color: 'white',
    padding: "3em",
    textAlign: "center"
  }

}));

export default function Home() {
  let classes = useStyles();
  return (
    <div>
      <Container className={classes.paper}>
        <Typography variant="h1" component="h2">
          Ini adalah About Page
        </Typography>
      </Container>
      <Container className={classes.incdec}>
        <Typography variant="h4" component="h2">
          Ini menggunakan Hooks
          <Hooks />
        </Typography>
        <Typography variant="h4" component="h2">
          Ini menggunakan ClassComponent
          <ClassComponent />
        </Typography>
      </Container>
    </div>
  );
}
