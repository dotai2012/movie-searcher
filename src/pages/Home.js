import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Button, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import List from '../components/List';
import {
  fetchMovies, fetchGenres, setCurrentGenre, setCurrentPage,
} from '../actions';
import Pagination from '../components/Pagination';
import NotFound from '../asset/img/404.png';

const mapStateToProps = ({
  movie, genre, currentPage, currentGenre, totalPages,
}) => ({
  movie,
  genre,
  currentPage,
  currentGenre,
  totalPages,
});

const styles = () => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
});

@connect(mapStateToProps, {
  fetchMovies, fetchGenres, setCurrentGenre, setCurrentPage,
})
@withStyles(styles)
class Home extends Component {

  state = {
    dropdown: null,
    genre: [],
  };

  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchGenres();
  }

  onDropdownOpen = (event) => {
    this.setState({ dropdown: event.currentTarget });
  };

  onDropdownClose = () => {
    this.setState({ dropdown: null });
  };

  onItemClick = genre => () => {
    this.props.setCurrentPage(1);
    this.props.setCurrentGenre(genre);
    this.props.fetchMovies(genre);
    this.setState({ dropdown: null });
  };

  render() {
    const { classes } = this.props;
    const { dropdown } = this.state;
    return (
      <React.Fragment>
          <div className={classes.center}>
            <Button
              aria-owns={dropdown ? 'Menu' : undefined}
              aria-haspopup="true"
              onClick={this.onDropdownOpen}
            >
              Select Genres
            </Button>
            <Menu
              id="Menu"
              dropdown={dropdown}
              anchorReference="none"
              PaperProps={{
                style: {
                  width: 315,
                  padding: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
              }}
              open={Boolean(dropdown)}
              onClose={this.onDropdownClose}
            >
              {this.props.genre.map(({ name, id }, item) => <MenuItem key={item} onClick={this.onItemClick(id)}>{name}</MenuItem>)}
            </Menu>
          </div>
        <Pagination totalPages={this.props.totalPages} />
        <List data={this.props.movie} notFoundImage={NotFound} />
        <Pagination totalPages={this.props.totalPages} />
      </React.Fragment>
    );
  }
}
export default Home;
