import { createGlobalStyle } from 'styled-components';

import Pokemon from '../fonts/PokemonGb-RAeo.ttf';
import GrassBackground from '../assets/pokegrass2.jpg';

export const GlobalStyle = createGlobalStyle`

@font-face {
      src: url(${Pokemon});
      font-family: Pokemon;
    }

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;

  }

  *:focus{
    outline:0;
  }

  html,body, #root{
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: #ccc;
    background-image: url(${GrassBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

`;
