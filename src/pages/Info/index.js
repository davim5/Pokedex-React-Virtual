import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container } from './styles';

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
      <img src={pokemon.sprite} alt="sprite" />
      <h1>{pokemon.name}</h1>
      <ul>
        <li>Speed: {pokemon.speed} </li>
        <li>Sp. Defense: {pokemon.spDefense} </li>
        <li>Sp. Attack: {pokemon.spAttack} </li>
        <li>Defense: {pokemon.defense} </li>
        <li>Attack: {pokemon.attack} </li>
        <li>HP: {pokemon.hp} </li>
      </ul>
      <ul>
        <li>{pokemon.type1}</li>
        <li>{pokemon.type2}</li>
      </ul>
    </Container>
  );
}

export default Info;
