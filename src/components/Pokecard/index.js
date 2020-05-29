import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { Container } from './styles';

function Pokecard({ name, url }) {
  const [card, setCard] = useState({
    id: 0,
    sprite: null,
  });

  useEffect(() => {
    api.get(url).then((response) => {
      setCard({
        id: response.data.id,
        sprite: response.data.sprites.front_default,
      });
    });
  });

  return (
    <Container>
      <span>{card.id}</span>
      <img src={card.sprite} alt="sprite" />
      <div className="description">
        <strong>{name}</strong>
        <div className="types" />
      </div>
    </Container>
  );
}

export default Pokecard;
