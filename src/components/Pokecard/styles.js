import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 20vh;

  border: 1.5px solid #ccc;

  border-radius: 4px;
  background: #eee;

  .description {
    display: flex;
    flex-direction: column;

    span {
      color: #888;
      font-size: 14px;
    }

    strong {
      color: #333;
    }
  }
`;
