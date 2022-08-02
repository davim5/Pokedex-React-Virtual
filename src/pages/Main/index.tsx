import { createContext, useEffect, useState, useReducer } from 'react';

import api from '../../services/api';

import { Interface, ContainerR, ContainerL, Pokelist, Spliter } from './styles';
import { Pokecard } from '../../components/Pokecard';
import { Pokeinfo } from '../../components/Pokeinfo';

interface PokemonContextType {
  selectedPokemonId: number | null
  setPokemon: (id:number) => void;
}

interface IPokemon {
  pokemonId:number;
}

function reducer( state:IPokemon, action:any ) {
  switch(action.type){
    case 'SET_POKEMON':
      return {pokemonId: action.payload.data}
    default:
      return state
  }
}

export const PokemonContext = createContext({} as PokemonContextType)

export interface PokedexData {
  name: string;
  url: string;
}

export function Main() {
  const [pokedex, setPokedex] = useState<PokedexData[]>([]);
  const [pokemon, dispatch] = useReducer(reducer, { pokemonId: null});

const setPokemonAction = (id:number) => {
  dispatch({
    type: 'SET_POKEMON',
    payload: {
      data: id,
    },
  });
}

  useEffect(() => {
    api.get('pokemon/?offset=0&limit=151').then((response) => {
      setPokedex(response.data.results);
    });
  }, []);

  return (
    <Interface>
      <PokemonContext.Provider value={{ selectedPokemonId:pokemon.pokemonId, setPokemon:setPokemonAction }}>
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
      </PokemonContext.Provider>
    </Interface>
  );
}
