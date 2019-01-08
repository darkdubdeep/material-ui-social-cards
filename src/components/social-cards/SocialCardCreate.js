import React, { Component, Fragment } from "react";

import HeaderNavigation from "../layout/HeaderNavigation";

import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { Provider } from "react-redux";
import store from "../../store/store";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
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

          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="title-text-input"
              label="Enter title"
              placeholder="Enter title"
              multiline
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="date-picker"
              label="Enter date"
              placeholder="Enter date"
              multiline
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="image-picker"
              label="pick an image"
              placeholder="pick an image"
              multiline
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="short-description"
              label="enter short description"
              placeholder="enter short description"
              multiline
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="additional-text"
              label="enter additional text"
              placeholder="enter additional text"
              multiline
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows="4"
              defaultValue="Default Value"
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </form>
        </Fragment>
      </Provider>
    );
  }
}

SocialCardCreate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialCardCreate);
