import React, { Component, Fragment } from "react";

import HeaderNavigation from "../layout/HeaderNavigation";

import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Provider } from "react-redux";
import store from "../../store/store";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  createCardForm: {
    marginTop: 50
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  fullWidth: {
    width: "100%"
  },
  button: {
    marginTop: 10,
    marginRight: 9
  }
});

class SocialCardCreate extends Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <Fragment>
          <HeaderNavigation />
          <Grid container justify="center">
            <Grid
              container
              item
              xs={12}
              sm={4}
              direction="column"
              justify="center"
            >
              <form
                className={classNames(
                  classes.container,
                  classes.createCardForm
                )}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="title-text-input"
                  label="Enter title"
                  placeholder="Enter title"
                  multiline
                  className={classNames(classes.textField, classes.fullWidth)}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="date-picker"
                  label="Enter date"
                  placeholder="Enter date"
                  multiline
                  className={classNames(classes.textField, classes.fullWidth)}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="image-picker"
                  label="pick an image"
                  placeholder="pick an image"
                  multiline
                  className={classNames(classes.textField, classes.fullWidth)}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="short-description"
                  label="enter short description"
                  placeholder="enter short description"
                  multiline
                  className={classNames(classes.textField, classes.fullWidth)}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="additional-text"
                  label="enter additional text"
                  placeholder="enter additional text"
                  multiline
                  rows="4"
                  className={classNames(classes.textField, classes.fullWidth)}
                  margin="normal"
                  variant="outlined"
                />
                <Grid container justify="flex-end">
                  <Button variant="outlined" className={classes.button}>
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                  >
                    Save
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Fragment>
      </Provider>
    );
  }
}

SocialCardCreate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialCardCreate);
