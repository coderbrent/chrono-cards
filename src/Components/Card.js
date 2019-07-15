import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia'

const useStyles = makeStyles({
  card: {
    width: 175,
    height: 175,
    margin: 5
  },
  media: {
    width: 150,
    height: 150
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card 
      className={classes.card}
      >
      <CardContent>
        <CardMedia
        image={props.img}
        className={classes.media}
        />
      </CardContent>
    </Card>
  );
}
