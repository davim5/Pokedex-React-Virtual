import React, { useState, useEffect } from 'react';

import { Line } from 'rc-progress';
import api from '~/services/api';

import { Container, Display, Types, Stats } from './styles';

function Info() {
  const [pokemon, setPokemon] = useState({
    id: null,
    name: '',
    sprite: null,
    moves: null,
    speed: null,
    spDefense: null,
    spAttack: null,
    defense: null,
    attack: null,
    hp: null,
    type1: null,
    type2: null,
  });

  useEffect(() => {
    api.get(`pokemon/3`).then((response) => {
      const type2 =
        response.data.types.length > 1
          ? response.data.types[1].type.name
          : null;

      setPokemon({
        id: response.data.id,
        name: response.data.name,
        sprite: response.data.sprites.front_default,
        moves: null,
        speed: response.data.stats[0].base_stat,
        spDefense: response.data.stats[1].base_stat,
        spAttack: response.data.stats[2].base_stat,
        defense: response.data.stats[3].base_stat,
        attack: response.data.stats[4].base_stat,
        hp: response.data.stats[5].base_stat,
        type1: response.data.types[0].type.name,
        type2,
      });
    });
  }, []);

  return (
    <Container>
      <h3>{pokemon.id}</h3>
      <Display src={pokemon.sprite} alt="sprite" />
      <h2>{pokemon.name}</h2>
      <Types>
        <strong>{pokemon.type1}</strong>
        <strong>{pokemon.type2}</strong>
      </Types>
      <Stats>
        <ul>
          <li>
            Speed: {pokemon.speed}
            <Line
              percent={(pokemon.speed / 255) * 100}
              strokeWidth="2"
              strokeColor="#A14EA0"
            />
          </li>
          <li>
            Sp. Defense: {pokemon.spDefense}
            <Line
              percent={(pokemon.spDefense / 255) * 100}
              strokeWidth="2"
              strokeColor="#63A542"
            />
          </li>
          <li>
            Sp. Attack: {pokemon.spAttack}{' '}
            <Line
              percent={(pokemon.spAttack / 255) * 100}
              strokeWidth="2"
              strokeColor="#5677C6"
            />
          </li>
          <li>
            Defense: {pokemon.defense}{' '}
            <Line
              percent={(pokemon.defense / 255) * 100}
              strokeWidth="2"
              strokeColor="#F8D147"
            />{' '}
          </li>
          <li>
            Attack: {pokemon.attack}{' '}
            <Line
              percent={(pokemon.attack / 255) * 100}
              strokeWidth="2"
              strokeColor="#F08148"
            />
          </li>
          <li>
            HP: {pokemon.hp}{' '}
            <Line
              percent={(pokemon.hp / 255) * 100}
              strokeWidth="2"
              strokeColor="#F6424C"
            />
          </li>
        </ul>
      </Stats>
    </Container>
  );
}

export default Info;
