import React, { Component } from "react";
import SocialCard from "./SocialCard";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { getSocialCardsList } from "../../store/actions/socialCardActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  customGridWidth: {
    [theme.breakpoints.up("lg")]: {
      width: 900
    }
  }
});

class SocialCardList extends Component {
  componentDidMount() {
    this.props.getSocialCardsList();
  }

  render() {
    const { classes, socialCards } = this.props;
    return (
      <Grid
        className={classes.customGridWidth}
        container
        direction="row"
        justify="center"
        spacing={24}
        style={{
          margin: "auto",
          width: "60%"
        }}
      >
        {socialCards.map(socialCard => (
          <SocialCard key={socialCard.id} socialCard={socialCard} />
        ))}
      </Grid>
    );
  }
}

SocialCardList.propTypes = {
  socialCards: PropTypes.array.isRequired,
  getSocialCardsList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  socialCards: state.socialCards.socialCards
});

export default connect(
  mapStateToProps,
  { getSocialCardsList }
)(withStyles(styles)(SocialCardList));
