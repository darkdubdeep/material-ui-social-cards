import React, { Component, Fragment } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";

import { withRouter } from "react-router-dom";

const styles = () => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

class SocialCardMain extends Component {
  handleClick = event => {
    const { id } = this.props;
    this.props.history.push(`/social-card-detail/${id}`);
  };

  render() {
    const {
      classes,
      cardMediaTitle,
      cardMediaImage,
      cardContentText,
      id
    } = this.props;
    return (
      <Fragment>
        <CardActionArea onClick={this.handleClick}>
          <CardMedia
            className={classes.media}
            image={cardMediaImage}
            title={cardMediaTitle}
          />
          <CardContent>
            <Typography component="p">{cardContentText}</Typography>
          </CardContent>
        </CardActionArea>
      </Fragment>
    );
  }
}
export default withRouter(withStyles(styles)(SocialCardMain));
