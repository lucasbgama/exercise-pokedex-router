import React from 'react';
import Pokemon from './Pokemon';

class Favorites extends React.Component {
  
  render() {
    const { pokemons, favorites } = this.props;
    const favPokemons = pokemons.filter(pokemon => favorites.includes(pokemon.id.toString()));
    return(
      <section>
        {favPokemons.map(
          poke => <Pokemon favorite={true} pokemon={poke} key={poke.id} />
        )}
      </section>
    )
  }
}

export default Favorites;
