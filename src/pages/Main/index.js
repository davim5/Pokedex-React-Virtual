import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Interface, ContainerR, ContainerL, Pokelist, Spliter } from './styles';
import Pokecard from '~/components/Pokecard';
import Pokeinfo from '~/components/Pokeinfo';

function Main() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    api.get('pokemon/?offset=0&limit=151').then((response) => {
      setPokedex(response.data.results);
    });
  }, []);

  return (
    <Interface>
      <ContainerR>
        <Pokelist>
          {pokedex.map((pokemon) => (
            <Pokecard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </Pokelist>
      </ContainerR>
      <Spliter />
      <ContainerL>
        <Pokeinfo />
      </ContainerL>
    </Interface>
  );
}

export default Main;
