import styled from 'styled-components';
import { lighten, darken } from 'polished';

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
    case 'normal':
      return '#A7A878';
    default:
      return '#ccc';
  }
}

export const Container = styled.div`
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
  width: 40%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  strong {
    width: 64px;
    height: 20px;
    border-radius: 2px;
    padding: 5px 5px 1px 5px;
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

export const Display = styled.img`
  border: 3px solid ${darken(0.1, '#55aaaa')};
  border-radius: 4px;
  background: #222;
  padding: 15px 40px;
  height: 200px;
`;

export const Stats = styled.div`
  margin-top: 5px;
  background: ${lighten(0.1, '#55aaaa')};
  width: 100%;
`;
