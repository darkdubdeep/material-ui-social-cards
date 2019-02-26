import React, { Component, Fragment } from "react";

import { withRouter } from "react-router-dom";

import HeaderNavigation from "../layout/HeaderNavigation";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { viewSocialCardDetail } from "../../store/actions/socialCardActions";
import PropTypes from "prop-types";

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
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.viewSocialCardDetail(id);
  }

  render() {
    if (!this.props.socialCard) {
      return <h1> loading...</h1>;
    }

    const {
      title,
      date,
      cardMediaImage,
      cardContentText,
      cardBottomText
    } = this.props.socialCard;

    const { classes } = this.props;

    return (
      <Fragment>
        <HeaderNavigation />

        <Grid container justify="center">
          <Grid item xs={6}>
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

              {cardMediaImage ? (
                <CardMedia className={classes.media} image={cardMediaImage} />
              ) : null}

              <Typography component="p" className={classes.p}>
                {cardBottomText}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
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
    { viewSocialCardDetail }
  )(withStyles(styles)(SocialCardDetail))
);
