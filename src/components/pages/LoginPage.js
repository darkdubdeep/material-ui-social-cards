import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginComponent from "./authentification-components/LoginComponent";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={24}
          justify="center"
          style={{
            margin: 0,
            width: "100%"
          }}
        >
          <Grid item xs={12} sm={3}>
            <LoginComponent />
          </Grid>
        </Grid>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginPage);
