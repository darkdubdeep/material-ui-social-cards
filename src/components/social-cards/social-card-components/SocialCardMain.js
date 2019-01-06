import React, { Component, Fragment } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

class SocialCardMain extends Component {
  render() {
    const {
      classes,
      cardMediaTitle,
      cardMediaImage,
      cardContentText
    } = this.props;
    return (
      <Fragment>
        <CardMedia
          className={classes.media}
          image={cardMediaImage}
          title={cardMediaTitle}
        />
        <CardContent>
          <Typography component="p">{cardContentText}</Typography>
        </CardContent>
      </Fragment>
    );
  }
}
export default withStyles(styles)(SocialCardMain);
