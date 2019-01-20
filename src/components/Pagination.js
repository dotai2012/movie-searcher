import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { fetchMovies, setCurrentPage } from '../actions';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const mapStateToProps = ({ currentPage, currentGenre }) => ({
  currentPage,
  currentGenre,
});

@withStyles(styles)
@connect(mapStateToProps, { fetchMovies, setCurrentPage })
class Pagination extends Component {
  onBackwardBtn = () => {
    if (this.props.currentPage > 1) {
      const prevPage = this.props.currentPage - 1;
      this.props.setCurrentPage(prevPage);
      this.props.fetchMovies(this.props.currentGenre, prevPage);
    }
  }

  onForwardBtn = () => {
    if (this.props.currentPage < this.props.totalPages) {
      const nextPage = this.props.currentPage + 1;
      this.props.setCurrentPage(nextPage);
      this.props.fetchMovies(this.props.currentGenre, nextPage);
    }
  }

  onGoBtn = () => {
    if (this.props.currentPage > 1 && this.props.currentPage < this.props.totalPages) {
      this.props.fetchMovies(this.props.currentGenre, this.props.currentPage);
    }
  }

  onHandleTextChange = (event) => {
    const pageValue = parseInt(event.target.value, 10);
    this.props.setCurrentPage(pageValue);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            {this.props.currentPage} / {this.props.totalPages}
        </Typography>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.onBackwardBtn}>
          &lt;
        </Button>
        <TextField
          name="page"
          value={this.props.currentPage}
          onChange={this.onHandleTextChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" className={classes.button} onClick={this.onForwardBtn}>
          &gt;
        </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.onGoBtn}>
          Go
        </Button>
      </div>
    );
  }
}

export default Pagination;
