import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import Header from './Header';
import About from './About';
import NotFound from './NotFound';
import Favorites from './Favorites';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  }

  favorite = ({target}) => {
    const { name } = target;
    const { favorites } = this.state;
    if(favorites.includes(name)){
      this.setState({
        favorites: favorites.filter(fav => fav !== name)
      },
        () => localStorage.setItem("favorites", JSON.stringify(this.state.favorites)));
    } else{
      this.setState({
        favorites: [...favorites, name]
      }, () => localStorage.setItem("favorites", JSON.stringify(this.state.favorites)));
    }
  }

  componentDidMount = () => {
    if(localStorage){
      this.setState({
        favorites: JSON.parse(localStorage.getItem('favorites'))
      })
    }
  }

  render() {
    const { favorites } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <h1> Pokedex </h1>
          <Switch>
            <Route path="/pokemons/:id" render={(props) => <PokemonDetails id={props.match.params.id} onChange={this.favorite} checked={favorites.includes(props.match.params.id)}/>} />
            <Route path="/about" component={About} />
            <Route path="/favorites" render={() => <Favorites favorites={favorites} pokemons={pokemons} />} />
            <Route exact path="/" render={() => <Pokedex favorites={favorites} pokemons={pokemons} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
