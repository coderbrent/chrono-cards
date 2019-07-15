import React from 'react';
import SimpleCard from './Components/Card';
import cards from './cards.json';
import Grid from '@material-ui/core/Grid/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography/Typography'

class App extends React.Component {
  state = {
    score: 0,
    currentScore: 0,
    display: "",
    highScore: 0,
    clicked: [],
    gameOver: false,
    cards
  };

  componentDidMount() {
    this.setState({display: "Click a Card to begin!"})
  }

  resetGame() {
    this.setState({
      score: 0,
      currentScore: 0,
      display: "",
      clicked: [],
      gameOver: false,
      cards
    })
  }

  shuffleCard = id => {
    //first check to see if the clicked array includes the id already.
    //if it does, set the score + 1, otherwise, restart the game.
    if(!this.state.clicked.includes(id)) {
      this.setState({ score: this.state.score += 1 })
    } else if (!this.state.clicked.includes(id) && this.currentScore > this.highScore) {
      this.setState( { highScore: this.currentScore} )
      alert('sorry, you lose - but you got the new high score!')
      this.resetGame();
    }

    const sort = this.state.cards.sort(() => Math.random() - 0.5);
    this.setState({ cards: sort });
    this.state.clicked.push(id)
  };

  render() {
    return (
      <>
      <div>{this.state.display}</div>
      <Grid container>
        {this.state.cards.map(Cage => (
          <Grid item xs onClick={() => this.shuffleCard(Cage.id)}>
            <SimpleCard
              shuffleCage = {this.shuffleCage}
              id={Cage.id}
              key={Cage.id}
              name={Cage.name}
              img={Cage.img} 
            />
          </Grid>
          )
        )}
       </Grid>
       <Grid container alignItems="center">
          <Grid item xs>
            <Typography>Current Score: {this.state.score}</Typography>
            <Typography>High Score: {this.state.highScore}</Typography>
          <Button 
            name="reset" 
            component="button" 
            variant="primary"
            onClick={() => this.resetGame()}
            >
            Reset 
          </Button>
          </Grid>
        </Grid>
      </>
    )
  } 
}


export default App;
