import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import api from '~/services/api';
import { CardContainer } from './styles';

// import pokeLoad from '~/assets/poke_loading.png';

function Pokecard({ name, url }) {
  const [loaded, setLoaded] = useState(false);
  const [card, setCard] = useState({
    id: 0,
    sprite: null,
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

  const dispatch = useDispatch();

  const handleShowPokemon = (id) => {
    dispatch({
      type: 'SET_POKEMON',
      id,
    });
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

export default Pokecard;
