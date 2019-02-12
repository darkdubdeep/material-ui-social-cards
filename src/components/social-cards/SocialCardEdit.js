import React, { Component, Fragment } from "react";

import { withRouter } from "react-router-dom";

import HeaderNavigation from "../layout/HeaderNavigation";

import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import format from "date-fns/format";
import enLocale from "date-fns/locale/en-US";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";

import store from "../../store/store";

import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { getSocialCardForEdit } from "../../store/actions/socialCardActions";
import { saveEditedSocialCard } from "../../store/actions/socialCardActions";

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

class SocialCardEdit extends Component {
  state = {
    title: "",
    date: "",
    selectedImageObject: null,
    previewImage: null,
    cardMediaImage: "",
    cardContentText: "",
    cardBottomText: "",
    isFavorite: false
  };

  componentDidMount() {
    const {
      id,
      title,
      date,
      cardMediaImage,
      cardContentText,
      cardBottomText,
      isFavorite
    } = this.props.socialCard;
    console.log(this.props.socialCard);

    this.setState({
      id,
      title,
      date,
      cardMediaImage,
      cardContentText,
      cardBottomText,
      isFavorite
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleDateChange = date => {
    this.setState({ date: date });
  };

  imageSelectedHandler = event => {
    this.setState({
      selectedImageObject: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0])
    });
  };

  saveEditedCard = () => {
    const {
      id,
      title,
      pictures,
      date,
      selectedImageObject,
      cardMediaImage,
      previewImage,
      cardContentText,
      cardBottomText
    } = this.state;

    // Check For Errors
    // if (name === "") {
    //   this.setState({ errors: { name: "Name is required" } });
    //   return;
    // }

    // if (email === "") {
    //   this.setState({ errors: { email: "Email is required" } });
    //   return;
    // }

    // if (phone === "") {
    //   this.setState({ errors: { phone: "Phone is required" } });
    //   return;
    // }

    const updatedCard = {
      id,
      title,
      pictures,
      date,
      selectedImageObject,
      cardMediaImage,
      previewImage,
      cardContentText,
      cardBottomText
    };

    console.log(updatedCard);
    this.props.saveEditedSocialCard(updatedCard);

    // Clear State
    this.setState({
      id,
      title: "",
      pictures: {},
      date: null,
      selectedImageObject: null,
      previewImage: null,
      cardContentText: "",
      cardBottomText: ""
    });
    this.props.history.push("/");
  };

  cancelChanges = () => {
    this.props.history.push("/");
  };

  render() {
    console.log(this.state);
    const { classes } = this.props;
    const {
      title,
      pictures,
      date,
      selectedImageObject,
      cardMediaImage,
      previewImage,
      cardContentText,
      cardBottomText
    } = this.state;
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
                    value={title}
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
                    value={date}
                    onChange={this.handleDateChange}
                    className={classNames(classes.textField, classes.fullWidth)}
                    format="d MMM yyyy"
                  />
                  <TextField
                    id="short-description"
                    label="enter short description"
                    placeholder="enter short description"
                    value={cardContentText}
                    multiline
                    className={classNames(classes.textField, classes.fullWidth)}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange("cardContentText")}
                  />
                  <TextField
                    id="additional-text"
                    label="enter additional text"
                    placeholder="enter additional text"
                    value={cardBottomText}
                    multiline
                    rows="4"
                    className={classNames(classes.textField, classes.fullWidth)}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange("cardBottomText")}
                  />
                  <Grid
                    container
                    justify="space-between"
                    className={classNames(classes.fullWidth)}
                  >
                    <Grid item>
                      <Card className={classes.card}>
                        {this.state.cardMediaImage ? (
                          <CardMedia
                            className={classes.media}
                            image={
                              this.state.previewImage === null
                                ? this.state.cardMediaImage
                                : this.state.previewImage
                            }
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
                    <Button
                      variant="outlined"
                      className={classes.button}
                      onClick={this.cancelChanges}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      onClick={this.saveEditedCard}
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

SocialCardEdit.proptypes = {
  classes: PropTypes.object.isRequired,
  socialCard: PropTypes.object.isRequired,
  getSocialCardForEdit: PropTypes.func.isRequired,
  saveEditedSocialCard: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  socialCard: state.socialCard.socialCard
});

export default withRouter(
  connect(
    mapStateToProps,
    { getSocialCardForEdit, saveEditedSocialCard }
  )(withStyles(styles)(SocialCardEdit))
);
