import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import api from '~/services/api';
import { Container } from './styles';

import pokeLoad from '~/assets/poke_loading.png';

function Pokecard({ name, url }) {
  const [card, setCard] = useState({
    id: 0,
    sprite: null,
    loading: true,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    api.get(url).then((response) => {
      setCard({
        id: response.data.id,
        sprite: response.data.sprites.front_default,
        loading: false,
      });
    });
  });

  function handleShowPokemon(id) {
    dispatch({
      type: 'SET_POKEMON',
      id,
    });
  }
  return (
    <Container
      loading={card.loading}
      onClick={() => handleShowPokemon(card.id)}
    >
      <span>{card.id}</span>
      {card.loading ? (
        <img src={pokeLoad} alt="loading" />
      ) : (
        <img src={card.sprite} alt="sprite" />
      )}

      <div className="description">
        <strong>{name}</strong>
        <div className="types" />
      </div>
    </Container>
  );
}

export default Pokecard;
