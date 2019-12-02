import React, { Component } from "react";
import axios from "axios";
import { Typography, Button } from "@material-ui/core";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    if (this.state.count === 0) {
      alert("no negative number");
      return;
    }
    this.setState({
      count: this.state.count - 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  componentDidMount = () => {
    axios.get(process.env.REACT_APP_API_GITHUB).then(response => {
      this.setState({ data: response.data });
    });
  };

  render() {
    return (
      <div>
        <Typography component="h1" variant="h5"
          style={{ color:"green", margin:"1em"}}
          >
          This is Count: {this.state.count}
        </Typography>
        <Button 
          style={{ margin: "0 2em" }}
          variant="contained" onClick={() => this.incrementCount()}>
          +
        </Button>
        <Button
          style={{ margin: "0 2em" }}
          variant="contained"
          onClick={() => this.decrementCount()}
        >
          -
        </Button>
        <Button 
          style={{ margin: "0 2em" }}
          variant="contained" onClick={() => this.reset()}>
          Reset
        </Button>
      </div>
    );
  }
}
