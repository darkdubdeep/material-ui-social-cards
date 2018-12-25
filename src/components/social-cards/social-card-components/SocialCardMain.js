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
    const { classes } = this.props;
    return (
      <Fragment>
        <CardMedia
          className={classes.media}
          image="https://img1.fonwall.ru/o/dv/stockholm-panorama-stokgolm-shveciya-eq35.jpg?route=mid&amp;h=750"
          title="Stockholm"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Fragment>
    );
  }
}
export default withStyles(styles)(SocialCardMain);
