import React from 'react';
import SimpleCard from './Components/Card';
import cards from './cards.json';
import Grid from '@material-ui/core/Grid/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography/Typography'
import Box from '@material-ui/core/Box'

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
      clicked: [],
      gameOver: false,
      cards
    })
  }

  shuffleCard = id => {
    //first check to see if the clicked array includes the id already.
    //if it does, set the score + 1, otherwise, restart the game.
    if(!this.state.clicked.includes(id)) {
      this.setState({ score: this.state.score + 1 })
    } else {
      alert('you lost, but you set a new high score!')
      this.setState( { 
        highScore: this.state.score,
        score: 0
      } )
      this.resetGame();
    }

    const sort = this.state.cards.sort(() => Math.random() - 0.5);
    this.setState({ cards: sort });
    this.state.clicked.push(id)
  };

  render() {
    return (
      <>
      <Box style={{backgroundColor: 'lightblue', padding: 35}}>
        <Typography style={{color: 'white', fontWeight: '700', textAlign:'center'}} variant="h2" component="h2">Chrono Card!</Typography>
        <Typography 
        variant="h6" 
        component="h6" 
        style={{color: 'white', textAlign: 'center' }}>
          Click any card to begin! If you click the same card twice you lose!
        </Typography>
        <Typography 
          variant="h5" 
          component="h5"
          style={{color: 'goldenrod', textAlign: 'center'}}
          >
          Current Score: {this.state.score}
        </Typography>
        <Typography 
          variant="h6" 
          component="h6"
          style={{color: 'goldenrod', textAlign: 'center'}}>
          High Score: {this.state.highScore}
        </Typography>
      </Box>
      <Grid container style={{margin: 15}}>
        {this.state.cards.map(Cage => (
          <Grid item xs onClick={() => this.shuffleCard(Cage.id)}>
            <SimpleCard
              key={Cage.id}
              shuffleCage = {this.shuffleCage}
              id={Cage.id}
              name={Cage.name}
              img={Cage.img} 
            />
          </Grid>
          )
        )}
       </Grid>
       <Grid container alignItems="center">
          <Grid item xs>

          <Button 
            name="reset" 
            component="button"
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
