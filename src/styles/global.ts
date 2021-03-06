import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std'), url(../assets/fonts/CircularStd-Medium.ttf) format('opentype')
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
    * {
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
    }

    html, body {
      height: 100%;
      -webkit-font-smoothing: antialiased;
    }

    #root {
      margin: 0 auto;
      height: 100%;
    } 

    button {
      font-family: 'Circular Std', sans-serif;
    }
`
