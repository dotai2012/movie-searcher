import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from './pages/Home';
import Movie from './pages/Movie';
import About from './pages/About';

export default function RouteApp(parent) {
  return (
    <Switch>
        <Route path="/" exact render={props => <Home {...props} {...parent} />} />
        <Route path="/movie/:id" render={props => <Movie {...props} {...parent} />} />
        <Route path="/about" render={props => <About {...props} {...parent} />} />
        <Route render={() => <Redirect to="/"/>} />
    </Switch>
  );
}
