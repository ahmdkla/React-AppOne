import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Typography, Container } from "@material-ui/core";
import axios from "axios";

const API_STRING = process.env.REACT_APP_API_PLACEHOLDER;

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    axios
      .get(API_STRING + "/users")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Container
          style={{
            background: "rgb(255,255,255,.5)",
            padding: "5em",
            textAlign: "center"
          }}
        >
          <Typography variant="h1" component="h2">
            Ini adalah User Page
          </Typography>
          {this.state.data.length > 0 &&
            this.state.data.map((item, key) => {
              return (
                <Card
                  style={{
                    color: "white",
                    background: "rgb(0,0,0,.5)",
                    margin: "20px"
                  }}
                  key={key}
                >
                  <CardContent>
                    <Typography style={{ color: "lightblue" }}>
                      {item.email}
                    </Typography>
                    <Typography variant="body1" component="p">
                      Hello my name is {item.name}
                    </Typography>
                    <br />
                    <Typography variant="subtitle2" component="p">
                      Phone: {item.phone}
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                      Website: {item.website}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button variant="contained" color="primary" size="large">
                      <Link
                        style={{ textDecoration: "none", color:"white" }}
                        to={`/users/${item.id}`}
                      >
                        Learn More
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
        </Container>
      </div>
    );
  }
}
