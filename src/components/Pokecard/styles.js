import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  cursor: pointer;
  font-family: Pokemon;
  text-transform: uppercase;

  width: 20vh;

  border: 1.5px solid #ccc;

  border-radius: 4px;
  background: #eee;

  span {
    color: #888;
    font-size: 14px;
  }

  .description {
    display: flex;
    flex-direction: column;

    strong {
      color: #333;
      font-size: 12px;
    }
  }
`;
