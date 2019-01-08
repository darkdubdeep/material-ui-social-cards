import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    marginTop: 80
  },
  fullWidth: {
    width: "100%"
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 70
  },
  button: {
    marginTop: 30,
    width: 130,
    margin: "auto"
  }
});

class RegistrationComponent extends Component {
  state = {
    password: "",
    email: "",
    showPassword: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h2>Please enter your information for register account</h2>
        <FormControl
          className={classNames(classes.textField, classes.fullWidth)}
        >
          <InputLabel htmlFor="adornment-password">E-mail</InputLabel>
          <Input
            id="email-input"
            value={this.state.email}
            onChange={this.handleChange("email")}
          />
        </FormControl>
        <FormControl
          className={classNames(classes.textField, classes.fullWidth)}
        >
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? "text" : "password"}
            value={this.state.password}
            onChange={this.handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" color="primary" className={classes.button}>
          Register
        </Button>
      </div>
    );
  }
}

RegistrationComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegistrationComponent);
