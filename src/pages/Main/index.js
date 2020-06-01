import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Interface, Container, Pokelist, Spliter } from './styles';
import Pokecard from '~/components/Pokecard';
import Pokeinfo from '~/components/Pokeinfo';

function Main() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    api.get('pokemon/?offset=0&limit=150').then((response) => {
      setPokedex(response.data.results);
    });
  }, []);

  return (
    <Interface>
      <Container>
        <h1>PokeMain</h1>
        <Pokelist>
          {pokedex.map((pokemon) => (
            <Pokecard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </Pokelist>
      </Container>
      <Spliter />
      <Container>
        <h1>PokeInfo</h1>
        <Pokeinfo />
      </Container>
    </Interface>
  );
}

export default Main;
