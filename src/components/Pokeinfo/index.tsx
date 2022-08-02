import React, { useState, useEffect, useContext } from 'react';
// import { useSelector } from 'react-redux';

import { Line } from 'rc-progress';
import api from '../../services/api';

import { InfoContainer, Display, Types, Stats } from './styles';
import { PokemonContext } from '../../pages/Main';

interface PokemonInfoData {
  id: number;
  name:string;
  sprite:string;
  speed: number;
  spDefense: number;
  spAttack: number;
  defense: number;
  attack: number;
  hp: number;
  type1: string;
  type2?: string;
}
interface StatAttributes {
  name: string;
}
interface IStat {
  stat: StatAttributes;
  base_stat: number;
}

export function Pokeinfo() {
  const { selectedPokemonId } = useContext(PokemonContext)
  const [pokemon, setPokemon] = useState<PokemonInfoData>({
    id: 0,
    name: '',
    sprite: '',
    speed: 0,
    spDefense: 0,
    spAttack: 0,
    defense: 0,
    attack: 0,
    hp: 0,
    type1: '',
    type2: '',
  });

  // Selected Pokemon
  const selectedId = selectedPokemonId;

  useEffect(() => {
    if(selectedId) 
      {
      api.get(`pokemon/${selectedId}`).then((response) => {
        // Put response in a variable
        const pokemonData = response.data;

        // Check if the pokemon has more than one type
        const type2 =
          pokemonData.types.length > 1 ? pokemonData.types[1].type.name : null;

        const pokemonStats = {
          hp: 0,
          attack: 0,
          defense: 0,
          spAttack: 0,
          spDefense: 0,
          speed: 0,
        };
        
        pokemonData.stats.forEach((stat:IStat) => {
          if (stat.stat.name === 'hp') {
            pokemonStats.hp = stat.base_stat;
          }
          if (stat.stat.name === 'attack') {
            pokemonStats.attack = stat.base_stat;
          }
          if (stat.stat.name === 'defense') {
            pokemonStats.defense = stat.base_stat;
          }
          if (stat.stat.name === 'special-attack') {
            pokemonStats.spAttack = stat.base_stat;
          }
          if (stat.stat.name === 'special-defense') {
            pokemonStats.spDefense = stat.base_stat;
          }
          if (stat.stat.name === 'hp') {
            pokemonStats.speed = stat.base_stat;
          }
        });

        setPokemon({
          id: pokemonData.id,
          name: pokemonData.name,
          sprite: pokemonData.sprites.front_default,
          speed: pokemonStats.speed,
          spDefense: pokemonStats.spDefense,
          spAttack: pokemonStats.spAttack,
          defense: pokemonStats.defense,
          attack: pokemonStats.attack,
          hp: pokemonStats.hp,
          type1: pokemonData.types[0].type.name as string,
          type2,
        });
      });
    }
  }, [selectedId]);

  return (
    <InfoContainer>
      <Display>
        {pokemon.sprite ? (
          <>
            <img src={pokemon.sprite} alt="sprite" />
            <h3>
              #{pokemon.id} {pokemon.name}
            </h3>
          </>
        ) : (
          <p>Choose your pokemon!</p>
        )}
      </Display>

      <Types type1={pokemon.type1} type2={pokemon.type2}>
        <strong className="first">{pokemon.type1}</strong>
        {/* Render the second type only if there is a second type */}
        {pokemon.type2 ? (
          <strong className="second">{pokemon.type2}</strong>
        ) : null}
      </Types>
      <Stats>
        <ul>
          <li>
            Speed: {pokemon.speed}
            <Line
              percent={(pokemon.speed / 255) * 100}
              strokeWidth={2}
              strokeColor="#A14EA0"
            />
          </li>
          <li>
            Sp. Defense: {pokemon.spDefense}
            <Line
              percent={(pokemon.spDefense / 255) * 100}
              strokeWidth={2}
              strokeColor="#63A542"
            />
          </li>
          <li>
            Sp. Attack: {pokemon.spAttack}{' '}
            <Line
              percent={(pokemon.spAttack / 255) * 100}
              strokeWidth={2}
              strokeColor="#5677C6"
            />
          </li>
          <li>
            Defense: {pokemon.defense}{' '}
            <Line
              percent={(pokemon.defense / 255) * 100}
              strokeWidth={2}
              strokeColor="#F8D147"
            />{' '}
          </li>
          <li>
            Attack: {pokemon.attack}{' '}
            <Line
              percent={(pokemon.attack / 255) * 100}
              strokeWidth={2}
              strokeColor="#F08148"
            />
          </li>
          <li>
            HP: {pokemon.hp}{' '}
            <Line
              percent={(pokemon.hp / 255) * 100}
              strokeWidth={2}
              strokeColor="#F6424C"
            />
          </li>
        </ul>
      </Stats>
    </InfoContainer>
  );
}