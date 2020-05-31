import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ul {
    li {
      list-style: none;
    }
  }
`;

export const Types = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  strong {
    border-radius: 2px;
    background: green;
    padding: 5px 5px 1px 5px;
    font-family: pokemon;
    color: white;
    border-top: 2px solid ${lighten(0.15, 'green')};
    border-bottom: 2px solid ${darken(0.1, 'green')};
    font-size: 9px;
    text-transform: uppercase;
    text-align: center;
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
  background: ${lighten(0.1, '#55aaaa')};
  width: 100%;
`;
