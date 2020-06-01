import styled, { keyframes, css } from 'styled-components';

// keyframes: Utilizar pra animações
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.button.attrs((props) => ({
  type: 'button',
  loading: props.loading,
}))`
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

  img {
    height: 96px;
    width: 96px;
  }

  ${(props) =>
    props.loading &&
    css`
      img {
        height: 64px;
        width: 64px;
        animation: ${rotate} linear 2s;
      }
    `}
`;
