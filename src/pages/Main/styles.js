import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #55aaaa;
  border: 20px solid #c6343b;
  padding: 5px;
  width: 400px;
  height: 600px;
`;

export const Pokelist = styled.ul`
  display: grid;

  height: 600px;
  overflow: auto;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;
`;
