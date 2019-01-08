import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  footer: {
    height: 100,
    bottom: 0
  }
});

class FooterNavigation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.footer}>
          <h3>hello</h3>
        </div>
      </React.Fragment>
    );
  }
}

FooterNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FooterNavigation);
