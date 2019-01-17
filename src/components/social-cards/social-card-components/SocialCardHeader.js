import React, { Component, Fragment } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { withRouter } from "react-router-dom";

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
    console.log(this.props);
    //should pass id
    const { id } = this.props;
    console.log(id);
    this.props.history.push(`/social-card-edit/${id}`);
  };

  deleteCard = () => {
    alert("Delete card");
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, title, date } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
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
    );
  }
}

export default withRouter(withStyles(styles)(SocialCardHeader));
