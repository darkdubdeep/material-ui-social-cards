import React, { Component, Fragment } from "react";

import { withRouter } from "react-router-dom";

import HeaderNavigation from "../layout/HeaderNavigation";
import PropTyoes from "prop-types";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import PropTypes from "prop-types";

import store from "../../store/store";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  paper: {
    marginTop: 25,
    padding: 15
  },
  p: {
    paddingTop: 10
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
    marginTop: 10,
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

class SocialCardDetail extends Component {
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
    console.log(this.props);

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

  render() {
    const { id } = this.props.match.params;
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
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <Fragment>
          <HeaderNavigation />

          <Grid container justify="center">
            <Grid item xs={6} item>
              <Paper className={classes.paper} elevation={5}>
                <Typography variant="h5" component="h3">
                  {title}
                </Typography>
                <Typography component="p" className={classes.p}>
                  {date}
                </Typography>

                <Typography component="p" className={classes.p}>
                  {cardContentText}
                </Typography>

                {this.state.cardMediaImage ? (
                  <CardMedia
                    className={classes.media}
                    image={this.state.cardMediaImage}
                  />
                ) : null}

                <Typography component="p" className={classes.p}>
                  {cardBottomText}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Fragment>
      </Provider>
    );
  }
}

SocialCardDetail.proptypes = {
  classes: PropTypes.object.isRequired,
  socialCard: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  socialCard: state.socialCard.socialCard
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(withStyles(styles)(SocialCardDetail))
);
