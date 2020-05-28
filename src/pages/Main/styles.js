import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Pokelist = styled.ul`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
`;
