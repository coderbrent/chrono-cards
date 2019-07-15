import React from 'react';
import SimpleCard from './Components/Card';
import cards from './cards.json';
import Grid from '@material-ui/core/Grid/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container/Container'
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
    this.setState({result: "Click a Card to begin!"})
  }

  resetGame() {
    this.setState({
      score: 0,
      currentScore: 0,
      display: "",
      highScore: 5,
      clicked: [],
      gameOver: false,
      cards
    })
  }

  shuffleCard = id => {
    const sort = this.state.cards.sort(() => Math.random() - 0.5);
    this.state.clicked.push(id)
    //console.log(this.state.clicked)
    this.setState({ cards: sort });
    if(!this.state.clicked.includes(id)) {
      alert('got one!')
      this.setState({ score: this.state.score + 1 })
    } else if(this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.state.score,
          display: "Correct!"
        })

    }
    //push every clicked card into a 'clicked' array. On every following click
    //check to see if the current clicked matches anything in the 'clicked' array.
    //if it does, game over. if it doesn't keep going.
  };

  render() {
    return (
      <>
      <Grid container style={{ flexGrow: 1, }}>
        <Grid item md={12} style={{ padding: 20, backgroundColor: "indigo" }}>
        {this.state.cards.map(Cage => ( 
              <SimpleCard
              onClick={() => this.shuffleCard(Cage.id)}
              shuffleCage = {this.shuffleCage}
              id={Cage.id}
              key={Cage.id}
              name={Cage.name}
              img={Cage.img} 
              />
            )
          )}
        </Grid>
      </Grid>

          <Button 
            name="reset" 
            component="button" 
            variant="outlined"
            onClick={() => this.resetGame()}
            >
            Reset 
          </Button>
          <div>{this.state.display}</div>
          <div>{this.state.score}</div>

      </>

    )
  } 
}


export default App;
