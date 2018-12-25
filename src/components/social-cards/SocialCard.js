import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import SocialCardHeader from "./social-card-components/SocialCardHeader";
import SocialCardMain from "./social-card-components/SocialCardMain";
import SocialCardBottom from "./social-card-components/SocialCardBottom";

const styles = () => ({
  card: {
    maxWidth: 400,
    marginTop: 20,
    marginBottom: 20
  }
});

class SocialCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <SocialCardHeader />
        <SocialCardMain />
        <SocialCardBottom />
      </Card>
    );
  }
}

SocialCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialCard);
