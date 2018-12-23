import React, { Component } from "react";
import SocialCard from "./SocialCard";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class SocialCardList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <SocialCard />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SocialCardList);
