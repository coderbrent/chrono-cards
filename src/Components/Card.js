import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia'

const useStyles = makeStyles({
  card: {
    maxWidth: 150,
    margin: 30,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 150
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
          <CardMedia 
          className={classes.media}
          image="https://www.placecage.com/c/150/100"
          title="contemplative-reptile"
          />
      </CardContent>
    </Card>
  );
}
