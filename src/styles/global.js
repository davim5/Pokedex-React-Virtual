import { createGlobalStyle } from 'styled-components';

import Pokemon from '~/fonts/PokemonGb-RAeo.ttf';

export default createGlobalStyle`

@font-face {
      font-family: Pokemon;
       src: url(${Pokemon})
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
  }

`;
