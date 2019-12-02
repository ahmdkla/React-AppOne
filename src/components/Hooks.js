import React, { useState } from "react";
import axios from "axios";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = new makeStyles(theme => ({
  buttonMargin: {
    margin: "2em"
  },

  typography: {
    margin: "1em",
    color: "violet"
  }
}));

export default function About() {
  let classes = useStyles();
  let [count, setCount] = React.useState({
      count: 0
    }),
    IncrementCount = function() {
      setCount({
        count: count.count + 1
      });
    },
    DecrementCount = function() {
      if (count.count === 0) {
        alert("no negative number");
        return;
      }
      setCount({
        count: count.count - 1
      });
    },
    Reset = function() {
      setCount({
        count: 0
      });
    };

  ///
  const [buah, setBuah] = useState({
    mangga: "mangga",
    strawberry: "strawbery"
  });
  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios.get(process.env.REACT_APP_API_GITHUB).then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <Typography component="h1" variant="h5" className={classes.typography}>
        This is Count: {count.count}
      </Typography>
      <Button
        className={classes.buttonMargin}
        variant="contained"
        onClick={() => IncrementCount()}
      >
        +
      </Button>
      <Button
        className={classes.buttonMargin}
        variant="contained"
        onClick={() => DecrementCount()}
      >
        -
      </Button>
      <Button
        className={classes.buttonMargin}
        variant="contained"
        onClick={() => Reset()}
      >
        Reset
      </Button>
      <Typography component="h5" variant="h5" className={classes.typography}>
        Buah yang aku suka adalah <br />
        {buah.strawberry} dan {buah.mangga}
      </Typography>
      <Button
        className={classes.buttonMargin}
        color="primary"
        variant="contained"
        onClick={() => {
          setBuah({ mangga: "mangga hijau", strawberry: "strawberry manis" });
        }}
      >
        Ubah buah
      </Button>
      {console.log(data)}
    </div>
  );
}
