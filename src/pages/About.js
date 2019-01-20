import React, { Component } from 'react';
import {
  List, ListItem, ListItemIcon, ListItemText, Button,
} from '@material-ui/core';
import { Layers, DeveloperBoard } from '@material-ui/icons';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className={this.props.parentClass}>
        <List>
          <ListItem>
            <ListItemIcon>
              <DeveloperBoard />
            </ListItemIcon>
            <ListItemText
              primary="The website is made from React"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText
              primary="It uses Material UI for its interface. You can check it out here: material-ui.com"
            />
          </ListItem>
        </List>
        <Link to="/">
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </div>
    );
  }
}

export default About;
