import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { registerUser } from '../../../store/actions/authenticationActions';

import { withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import { TextField } from '@material-ui/core';

import ErrorSnackbar from './../../shared/ErrorSnackbar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: 80
  },
  fullWidth: {
    width: '100%'
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
    margin: 'auto'
  },
  progress: {
    margin: theme.spacing.unit * 2,
    marginTop: 250
  }
});

class RegistrationComponent extends Component {
  state = {
    name: '',
    password: '',
    passwordConfirmation: '',
    email: '',
    showPassword: false,
    nameError: false,
    emailError: false,
    passwordError: false,
    passwordConfirmationError: false
  };

  hadleValidation = (prop, value) => {
    if (prop === 'name') {
      if (!value) {
        this.setState({ nameError: true });
      } else {
        this.setState({ nameError: false });
      }
    }
    if (prop === 'email') {
      if (!value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        this.setState({ emailError: true });
      } else {
        this.setState({ emailError: false });
      }
    }
    if (prop === 'password') {
      if (!value) {
        this.setState({ passwordError: true });
      } else {
        this.setState({ passwordError: false });
      }
    }
    if (prop === 'passwordConfirmation' && this.state.password) {
      if (!value || value !== this.state.password) {
        this.setState({ passwordConfirmationError: true });
      } else {
        this.setState({ passwordConfirmationError: false });
      }
    }
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    this.hadleValidation(prop, event.target.value);
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  registerHandler = () => {
    const { name, password, passwordConfirmation, email } = this.state;

    if (!name) {
      this.setState({ nameError: true });
    }
    if (!email) {
      this.setState({ emailError: true });
    }
    if (!password) {
      this.setState({ passwordError: true });
    }
    if (!passwordConfirmation || passwordConfirmation !== password) {
      this.setState({ passwordConfirmationError: true });
    }

    setTimeout(() => {
      if (
        !this.state.nameError &&
        !this.state.emailError &&
        !this.state.passwordError &&
        !this.state.passwordConfirmationError
      ) {
        const password_confirmation = passwordConfirmation;
        const body = { name, password, password_confirmation, email };
        this.props.registerUser(body);
      }
    });

    // this.props.history.push('/login');
  };

  render() {
    const { classes, isFetching, serverError } = this.props;
    if (isFetching) {
      return (
        <CircularProgress className={classes.progress} color='secondary' />
      );
    }
    return (
      <div className={classes.root}>
        <h2>Please enter your information</h2>
        <ErrorSnackbar serverError={serverError} />
        <TextField
          label='Name'
          className={classNames(classes.textField, classes.fullWidth)}
          error={this.state.nameError ? true : false}
          id='name-input'
          value={this.state.name}
          onChange={this.handleChange('name')}
          helperText={this.state.nameError ? 'Name is required' : false}
        />
        <TextField
          label='E-mail'
          className={classNames(classes.textField, classes.fullWidth)}
          error={this.state.emailError ? true : false}
          value={this.state.email}
          onChange={this.handleChange('email')}
          helperText={
            this.state.emailError ? 'Please enter the correct email' : false
          }
        />
        <TextField
          label='Password'
          className={classNames(classes.textField, classes.fullWidth)}
          error={this.state.passwordError ? true : false}
          value={this.state.password}
          onChange={this.handleChange('password')}
          helperText={
            this.state.passwordError ? 'Please enter password' : false
          }
          type={this.state.showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  edge='end'
                  aria-label='Toggle password visibility'
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <TextField
          label='Confirm password'
          className={classNames(classes.textField, classes.fullWidth)}
          error={this.state.passwordConfirmationError ? true : false}
          value={this.state.passwordConfirmation}
          onChange={this.handleChange('passwordConfirmation')}
          helperText={
            this.state.passwordConfirmationError
              ? 'Please confirm password'
              : false
          }
          type={this.state.showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  edge='end'
                  aria-label='Toggle password visibility'
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={this.registerHandler}
        >
          Register
        </Button>
      </div>
    );
  }
}

RegistrationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  serverError: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isFetching: state.shared.isFetching,
  serverError: state.shared.serverError
});

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser }
  )(withStyles(styles)(RegistrationComponent))
);
