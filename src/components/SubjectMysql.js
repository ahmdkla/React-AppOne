import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Formik } from "formik";
import swal from "sweetalert2";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const swalWithBootstrapButtons = swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

const user = JSON.parse(localStorage.getItem("user"));

export default class SubjectMongoose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  showSubject = () => {
    axios
      .get(`${process.env.REACT_APP_API_MONGOOSE}/subjects/email/${user.email}`)
      .then(response => {
        this.setState({ data: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.showSubject();
  };

  addOne = values => {
    axios
      .post(`${process.env.REACT_APP_API_MONGOOSE}/subjects`, {
        ...values,
        email: user.email,
        status: true,
        user: user._id
      })
      .then(response => {
        if (response.status === 200) {
          swal.fire("Added!", "Your subject has been added.", "success");
          this.showSubject();
        }
      });
  };

  deleteOne = (id, subject) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      .then(result => {
        if (result.value) {
          axios
            .delete(`${process.env.REACT_APP_API_MONGOOSE}/subjects/${id}`)
            .then(response => {
              if (response.status === 200) {
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  `Subject ${subject} is deleted.`,
                  "success"
                );
              }
            })
            .then(() => {
              this.showSubject();
            });
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelled");
        }
      });
  };

  updateOne = id => {
    console.log(id);

    swal
      .mixin({
        input: "text",
        confirmButtonText: "Update",
        showCancelButton: true,
        progressSteps: ["1"]
      })
      .queue([
        {
          title: "Update Subjects",
          text: "Change your Subjects"
        }
      ])
      .then(result => {
        if (result.value) {
          const answer = result.value;
          const data = answer.toString();

          axios
            .put(`${process.env.REACT_APP_API_MONGOOSE}/subjects/${id}`, {
              subject: data
            })
            .then(response => {
              if (response.status === 200) {
                swal.fire({
                  title: "All done!",
                  html: `
                              Your Subjects has been update:
                              <pre><code>${answer}</code></pre>
                            `,
                  confirmButtonText: "Done!"
                });
                this.showSubject();
              } else {
                swal.fire(
                  "Cancelled",
                  "Theres some error when update",
                  "error"
                );
              }
            });
        }
      });
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            subject: ""
          }}
          onSubmit={values => {
            this.addOne(values);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form
              style={{ textAlign: "center", marginTop: "50px" }}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <Paper
                style={{
                  marginTop: "100px",
                  padding: "2em",
                  background: "rgb(200,200,200)"
                }}
              >
                <TextField
                  id="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.subject}
                  label="Add Subject"
                  variant="outlined"
                />
                <Button
                  style={{ marginLeft: "20px" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  ADD
                </Button>
              </Paper>
            </form>
          )}
        </Formik>
        {this.state.data.length > 0 &&
          this.state.data.map(({ subject, _id }, key) => {
            return (
              <Paper
                style={{
                  padding: "2em",
                  background: "rgb(200,200,200)",
                  width: "40%",
                  margin: "0 auto",
                  marginTop: "50px"
                }}
                key={key}
                className={useStyles.root}
              >
                <div style={{ padding: "25px" }}>
                  <Typography variant="h3" component="h3" style={{paddingBottom:'1em'}}>
                    {user.firstName.toUpperCase()}
                  </Typography>
                  <Typography variant="h5" component="h3">
                    Subject - {subject}
                  </Typography>
                  <div style={{ marginTop: "20px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.updateOne(_id)}
                    >
                      Edit
                    </Button>

                    <Button
                      style={{ marginLeft: "20px" }}
                      variant="contained"
                      color="secondary"
                      onClick={() => this.deleteOne(_id, subject)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Paper>
            );
          })}
      </div>
    );
  }
}
