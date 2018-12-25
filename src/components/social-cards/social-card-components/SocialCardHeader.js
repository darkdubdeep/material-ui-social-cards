import React, { Component } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const styles = () => ({
  avatar: {
    backgroundColor: red[500]
  }
});

class SocialCardHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    );
  }
}

export default withStyles(styles)(SocialCardHeader);
