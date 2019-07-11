import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia'

const useStyles = makeStyles({
  card: {
    maxWidth: 125,
    margin: 15,
  },
  media: {
    height: 150
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
          <CardMedia
          image={props.img}
          className={classes.media}
          />
      </CardContent>
    </Card>
  );
}
