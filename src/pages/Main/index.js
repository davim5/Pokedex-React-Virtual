import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container, Pokelist } from './styles';
import Pokecard from '~/components/Pokecard';

function Main() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    api.get('pokemon').then((response) => {
      setPokedex(response.data.results);
    });
  }, []);

  return (
    <Container>
      <h1>PokeMain</h1>
      <Pokelist>
        {pokedex.map((pokemon) => (
          <Pokecard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </Pokelist>
    </Container>
  );
}

export default Main;
