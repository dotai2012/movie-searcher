import React, { Component } from 'react';
import { CssBaseline, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Info } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import RouteApp from '../route';
import Footer from './Footer';
import '../asset/css/main.css';


const styles = theme => ({
  maxHeight: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    right: '0.5rem',
    top: '2rem',
    zIndex: 1000,
  },
});

@withStyles(styles)
@withRouter
class App extends Component {
  renderAbout = () => {
    const { classes } = this.props;
    if (this.props.location.pathname !== '/about') {
      return (
        <Link to="/about">
          <Button variant="contained" color="secondary" className={classes.button}>
            <Info /> {' '}
            About
          </Button>
        </Link>
      );
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        {this.renderAbout()}
        <RouteApp parentClass={classes.maxHeight} />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
