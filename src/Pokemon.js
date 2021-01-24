import React from 'react';
import './pokemon.css';

import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const {favorite} = this.props;
    const {name, type, averageWeight, image, id } = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <p><Link to={`/pokemons/${id}`}>Details</Link></p>
        </div>
        <div className='right'>
          {favorite && <p className='fav-icon'>★</p>}
          <img src={image} alt={`${name} sprite`} />
        </div>
      </div>
    );
  }
}

export default Pokemon;
