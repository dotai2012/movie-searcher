import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Paper, Table, TableRow, TableCell, TableBody, Grid, Typography, Button,
} from '@material-ui/core';
import {
  ArrowRightAlt, DateRange, StarRate,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import { fetchMovie } from '../actions';
import NotFound from '../asset/img/404.png';

const mapStateToProps = ({ movie }) => ({
  movie,
});

const styles = theme => ({
  container: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summary: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    maxWidth: '60rem',
  },
});

@connect(mapStateToProps, { fetchMovie })
@withStyles(styles)
class Movie extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.fetchMovie(id);
  }

  render() {
    const { classes, movie } = this.props;
    const {
      title, vote_average, overview, poster_path, release_date,
    } = movie.length > 0 && movie[0];
    return (
      <div className={this.props.parentClass}>
        <Link to="/">
          <Button variant="contained" color="primary" className={classes.button}>
            Back
          </Button>
        </Link>
        <Paper className={classes.container} elevation={1}>
          <Grid container>
            <Grid item xs>
              <img width={154} height={243} src={poster_path ? `https://image.tmdb.org/t/p/w154/${poster_path}` : NotFound } />
            </Grid>
            <Grid item xs className={classes.info}>
              <Table className={classes.table}>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <ArrowRightAlt />
                    </TableCell>
                    <TableCell align="right">{title}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <DateRange />
                    </TableCell>
                    <TableCell align="right">{release_date}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <StarRate />
                    </TableCell>
                    <TableCell align="right">{vote_average}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.summary}>
          <Typography variant="p">
            {overview}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Movie;
