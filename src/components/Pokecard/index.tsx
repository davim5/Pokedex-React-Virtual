import React, { useContext, useEffect, useReducer, useState } from 'react';
import { PokedexData, PokemonContext } from '../../pages/Main';

import api from '../../services/api';
import { CardContainer } from './styles';

// import pokeLoad from '~/assets/poke_loading.png';

interface PokemonCardProps {
  id:number;
  sprite:string;
}

export function Pokecard({ name, url }:PokedexData) {
  const { setPokemon } = useContext(PokemonContext);
  const [loaded, setLoaded] = useState(false);
  const [card, setCard] = useState<PokemonCardProps>({
    id: 0,
    sprite: '',
  });
  

  useEffect(() => {
    if (loaded === false) {
      api.get(url).then((response) => {
        const { id, sprites } = response.data;
        setCard({
          id,
          sprite: sprites.front_default,
        });
        return response.data;
      });
      setLoaded(true);
    }
  }, [loaded, url]);

  const cardName = name;

  const handleShowPokemon = (id:number) => {
    setPokemon(id)
  };

  return (
    <CardContainer onClick={() => handleShowPokemon(card.id)}>
      <span>{card.id}</span>

      <img src={card.sprite} alt="sprite" />

      <div className="description">
        <strong>{cardName}</strong>
        <div className="types" />
      </div>
    </CardContainer>
  );
}
