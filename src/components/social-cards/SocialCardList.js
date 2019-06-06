import React, { Component, Fragment } from 'react';
import SocialCard from './SocialCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { getSocialCardsList } from '../../store/actions/socialCardActions';
// import { setLoading } from "../../store/actions/sharedActions";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  customGridWidth: {
    [theme.breakpoints.up('lg')]: {
      width: 900
    }
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class SocialCardList extends Component {
  componentDidMount() {
    this.props.getSocialCardsList();
  }

  render() {
    const { classes, socialCards, isFetching } = this.props;
    console.log(this.props);
    let justify =
      socialCards.length % 2 === 0 || socialCards.length === 1
        ? 'center'
        : 'flex-start';

    if (isFetching && !socialCards.length) {
      return (
        <CircularProgress className={classes.progress} color='secondary' />
      );
    }

    return (
      <Fragment>
        <Grid
          className={classes.customGridWidth}
          container
          direction='row'
          justify={justify}
          spacing={24}
          style={{
            margin: 'auto',
            width: '60%'
          }}
        >
          {socialCards.map(socialCard => (
            <SocialCard key={socialCard.id} socialCard={socialCard} />
          ))}
        </Grid>
      </Fragment>
    );
  }
}

SocialCardList.propTypes = {
  socialCards: PropTypes.array.isRequired,
  getSocialCardsList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  socialCards: state.socialCard.socialCards,
  isFetching: state.shared.isFetching
  // isFetching: getIsFetching(state)
});

export default connect(
  mapStateToProps,
  { getSocialCardsList }
)(withStyles(styles)(SocialCardList));
