import React, { Component, Fragment } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { getSocialCardForEdit } from "../../../store/actions/socialCardActions";

import { withRouter } from "react-router-dom";

import store from "../../../store/store";

import PropTyoes from "prop-types";
import { Provider } from "react-redux";
import { connect } from "react-redux";

const styles = () => ({
  avatar: {
    backgroundColor: red[500]
  },
  actions: {
    display: "flex"
  },
  moreIconButton: {
    marginRight: 10
  }
});

class SocialCardHeader extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  editCard = () => {
    this.setState({ anchorEl: null });
    const { id } = this.props;
    this.props.getSocialCardForEdit(id);
    this.props.history.push(`/social-card-edit/${id}`);
  };

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   const { id } = this.props;
  //   if (this.props.socialCard !== prevProps.socialCard) {
  //     this.props.history.push(`/social-card-edit/${id}`);
  //   }
  // }

  deleteCard = () => {
    alert("Delete card");
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, title, date } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Provider store={store}>
        <Fragment>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton
                className={classes.moreIconButton}
                onClick={this.handleClick}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            date={date}
          />
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                width: 100
              }
            }}
          >
            <MenuItem key="edit" onClick={this.editCard}>
              Edit
            </MenuItem>
            <MenuItem key="delete" onClick={this.deleteCard}>
              Delete
            </MenuItem>
          </Menu>
        </Fragment>
      </Provider>
    );
  }
}

SocialCardHeader.proptypes = {
  socialCard: PropTyoes.object.isRequired,
  getSocialCardForEdit: PropTyoes.object.isRequired
};

const mapStateToProps = state => ({
  socialCard: state.socialCard.socialCard
});

export default connect(
  mapStateToProps,
  { getSocialCardForEdit }
)(withRouter(withStyles(styles)(SocialCardHeader)));
