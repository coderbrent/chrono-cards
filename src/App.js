import React from 'react';
import SimpleCard from './Components/Card';
import cages from './Cages.json';
import Grid from '@material-ui/core/Grid/Grid'

class App extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    clicked: [],
    gameOver: false,
    cages
  };

  shuffleCage = id => {
    const clicked = [];
    const sort = this.state.cages.sort(() => Math.random() - 0.5);
    clicked.push(this.state.cages[0].id)
    console.log(clicked.length)
    this.setState({ cages: sort });
    //push every clicked card into a 'clicked' array. On every following click
    //check to see if the current clicked matches anything in the 'clicked' array.
    //if it does, game over. if it doesn't keep going.
  };

  render() {
    return (
      <>
        {this.state.cages.map(Cage => ( 
            <Grid item md={3}
            onClick={() => this.shuffleCage(Cage.id)}
            >
              <SimpleCard
              shuffleCage = {this.shuffleCage}
              id={Cage.id}
              key={Cage.id}
              name={Cage.name}
              img={Cage.img} 
              /> 
            </Grid>
            )
          )};
      </>
    )
  } 
}


export default App;
