import React, { Component } from "react";
import PropTypes from "prop-types";
import RegistrationComponent from "./authentification-components/RegistrationComponent";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class RegistrationPage extends Component {
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
            <RegistrationComponent />
          </Grid>
        </Grid>
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegistrationPage);
