import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid, Card, CardMedia, CardContent, Typography, ButtonBase,
} from '@material-ui/core';
import _ from 'lodash';
import { withRouter } from 'react-router';

const styles = () => ({
  container: {
    width: '80%',
    margin: '0 auto',
  },
  card: {
    width: '100%',
    display: 'block',
  },
  media: {
    height: 250,
    objectFit: 'cover',
  },
  content: {
    height: '12rem',
  },
});

@withStyles(styles)
@withRouter
class List extends Component {
  onCardClick = id => () => {
    this.props.history.push(`/movie/${id}`);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.container} spacing={16}>
        {this.props.data.map(({
          id, title, poster_path, overview,
        }, index) => (
            <Grid item xs={6} md={4} key={index}>
            <Card>
                <ButtonBase onClick={this.onCardClick(id)} className={classes.card}>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      height={200}
                      width={342}
                      image={poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}` : this.props.notFoundImage }
                      title={title}
                    />
                    <CardContent className={classes.content}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {title}
                      </Typography>
                      <Typography component="p">
                        {_.truncate(overview, {
                          length: 200,
                        })}
                      </Typography>
                    </CardContent>
                </ButtonBase>
              </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default List;
