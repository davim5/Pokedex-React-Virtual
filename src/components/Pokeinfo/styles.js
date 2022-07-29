import styled from 'styled-components';
import { lighten, darken } from 'polished';

// function to read every type and set their especific colors
function handleTypeColor(type) {
  switch (type) {
    case 'poison':
      return '#A152A0';
    case 'fire':
      return '#F08030';
    case 'grass':
      return '#78C850';
    case 'flying':
      return '#A890F0';
    case 'water':
      return '#6790F0';
    case 'bug':
      return '#A8B826';
    case 'electric':
      return '#F8D036';
    case 'ground':
      return '#E0C068';
    case 'fighting':
      return '#C03027';
    case 'psychic':
      return '#F35788';
    case 'ice':
      return '#98D8D8';
    case 'dragon':
      return '#7A79F9';
    case 'dark':
      return '#705848';
    case 'steel':
      return '#B8B8D0';
    case 'fairy':
      return '#DEA5DE';
    case 'rock':
      return '#B8A038';
    case 'ghost':
      return '#705898';
    case 'normal':
      return '#A7A878';
    default:
      return '#333';
  }
}

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #333;
  padding: 20px 5px;
  width: 100%;

  ul {
    li {
      list-style: none;
    }
  }
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3px solid ${darken(0.1, '#222')};
  border-radius: 4px;
  background: #222;
  color: #f8f8f8;

  padding: 15px 40px;
  height: 250px;
  width: 300px;

  img {
    width: 100%;
  }
`;

export const Types = styled.div.attrs((props) => ({
  colors1: {
    primary: handleTypeColor(props.type1),
    top: lighten(0.15, handleTypeColor(props.type1)),
    bottom: darken(0.1, handleTypeColor(props.type1)),
  },
  colors2: {
    primary: handleTypeColor(props.type2),
    top: lighten(0.15, handleTypeColor(props.type2)),
    bottom: darken(0.1, handleTypeColor(props.type2)),
  },
}))`
  display: flex;
  width: 55%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;

  strong {
    width: 84px;
    height: 20px;
    border-radius: 2px;
    padding: 6px 5px 1px 5px;
    font-family: pokemon;
    color: white;
    font-size: 9px;
    text-transform: uppercase;
    text-align: center;
  }

  .first {
    background: ${(props) => props.colors1.primary};
    border-top: 2px solid ${(props) => props.colors1.top};
    border-bottom: 2px solid ${(props) => props.colors1.bottom};
  }

  .second {
    background: ${(props) => props.colors2.primary};
    border-top: 2px solid ${(props) => props.colors2.top};
    border-bottom: 2px solid ${(props) => props.colors2.bottom};
  }
`;

export const Stats = styled.div`
  margin-top: 5px;
  background: ${lighten(0.1, '#55aaaa')};
  width: 100%;
`;
