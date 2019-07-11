import React from 'react';
import SimpleCard from './Components/Card';
import cages from './Cages.json';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
  state = {
    cages
  };

  render() {
    return (
      <Grid>
        <Container>
          {this.state.cages.map(Cage => ( 
            <SimpleCard 
              id={Cage.id}
              name={Cage.name}
              img={Cage.img} /> 
            )
          )};
        </Container>
      </Grid>
    );
  } 
}


export default App;
