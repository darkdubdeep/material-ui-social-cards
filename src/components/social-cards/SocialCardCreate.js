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

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import format from "date-fns/format";
import enLocale from "date-fns/locale/en-US";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  card: {
    maxWidth: 300,
    minWidth: 250,
    marginTop: 10,
    marginLeft: 7
  },
  media: {
    height: 0,
    minWidth: 250,
    paddingTop: "56.25%" // 16:9
  },
  createCardForm: {
    marginTop: 50,
    marginBottom: 20
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
  },
  input: {
    display: "none"
  },
  dropZoneHolder: {
    height: 100
  }
});

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "d MMM yyyy", { locale: this.locale });
  }
}

class SocialCardCreate extends Component {
  state = {
    title: "",
    pictures: {},
    date: "",
    selectedImageObject: null,
    previewImage: null,
    files: [],
    shortDescription: "",
    additionalText: "",
    selectedDate: new Date()
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  imageSelectedHandler = event => {
    this.setState({
      selectedImageObject: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0])
    });
  };

  render() {
    console.log(this.state);
    const { classes } = this.props;
    const { selectedDate } = this.state;
    return (
      <MuiPickersUtilsProvider utils={LocalizedUtils} locale={enLocale}>
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
                    name="title"
                    label="Enter title"
                    placeholder="Enter title"
                    multiline
                    className={classNames(classes.textField, classes.fullWidth)}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange("title")}
                  />
                  <DatePicker
                    margin="normal"
                    variant="outlined"
                    label="Enter date"
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    className={classNames(classes.textField, classes.fullWidth)}
                    format="d MMM yyyy"
                  />
                  <TextField
                    id="short-description"
                    label="enter short description"
                    placeholder="enter short description"
                    multiline
                    className={classNames(classes.textField, classes.fullWidth)}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange("shortDescription")}
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
                    onChange={this.handleChange("additionalText")}
                  />
                  <Grid
                    container
                    justify="space-between"
                    className={classNames(classes.fullWidth)}
                  >
                    <Grid item>
                      <Card className={classes.card}>
                        {this.state.previewImage !== null ? (
                          <CardMedia
                            className={classes.media}
                            image={this.state.previewImage}
                            title="Paella dish"
                          />
                        ) : null}
                      </Card>
                    </Grid>
                    <Grid item>
                      <input
                        accept="image/*"
                        className={classes.input}
                        onChange={this.imageSelectedHandler}
                        id="icon-button-file"
                        type="file"
                      />
                      <label htmlFor="icon-button-file">
                        <IconButton
                          color="primary"
                          className={classes.button}
                          component="span"
                        >
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </Grid>
                  </Grid>

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
      </MuiPickersUtilsProvider>
    );
  }
}

SocialCardCreate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialCardCreate);
