import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const apiurl = "https://jsonplaceholder.typicode.com/posts";

export class UserPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    const {
      match: {
        params: { userId }
      }
    } = this.props;
    axios
      .get(apiurl)
      .then(res => {
        let userPosted = res.data.filter(item => {
          return item.userId == userId;
        });
        this.setState({ data: userPosted });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      this.state.data.length > 0 &&
      this.state.data.map((item, key) => {
        return (
          <List key={key}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={item.userId}
                secondary={
                  <React.Fragment>
                    <Typography component="h1" variant="h4" color="textPrimary">
                      {item.title}
                      <br />
                    </Typography>
                    <Typography
                      component="h1"
                      variant="h6"
                      color="textSecondary"
                    >
                      {item.body}
                      <br />
                    </Typography>
                  </React.Fragment>
                }
              />
              <Button
                variant="contained"
                color="primary"
                margin="props"
                style={{ margin: "50px"}}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "50px"}}
              >
                Delete
              </Button>
            </ListItem>
          </List>
        );
      })
    );
  }
}
export default withRouter(UserPost);
