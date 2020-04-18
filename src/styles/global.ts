import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std'), url(../assets/fonts/CircularStd-Medium.ttf) format('opentype')
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
    * {
      margin: 0;
      padding: 0;
      /* outline: 0; */
      /* height: 100%; */
      /* box-sizing: border-box; */
      font-family: 'Poppins', sans-serif;
    }

     body {
      -webkit-font-smoothing: antialiased;
    }

    #root {
      margin: 0 auto;
    } 

    button {
      font-family: 'Circular Std', sans-serif;
    }
`
