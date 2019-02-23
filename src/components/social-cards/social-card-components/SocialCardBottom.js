import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { likeSocialCard } from "../../../store/actions/socialCardActions";

import PropTyoes from "prop-types";
import { connect } from "react-redux";

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginTop: 20,
    marginBottom: 20
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  menuItem: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
});

class SocialCardBottom extends Component {
  state = { expanded: false, anchorEl: null };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  likeSocialCard = () => {
    const { id, isFavorite } = this.props;
    let payloadObj = {
      id: id,
      isFavorite: !isFavorite
    };

    console.log(payloadObj);
    this.props.likeSocialCard(payloadObj);
  };

  render() {
    const { classes, isFavorite } = this.props;

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Fragment>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            aria-label="Add to favorites"
            color={isFavorite ? "secondary" : "default"}
            onClick={this.likeSocialCard}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share" onClick={this.handleClick}>
            <ShareIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                width: 120
              }
            }}
          >
            <MenuItem onClick={this.handleClose}>Faceboook</MenuItem>
            <MenuItem onClick={this.handleClose}> Linkedin</MenuItem>
          </Menu>
        </CardActions>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  socialCard: state.socialCard.socialCard
});

export default connect(
  mapStateToProps,
  { likeSocialCard }
)(withStyles(styles)(SocialCardBottom));
