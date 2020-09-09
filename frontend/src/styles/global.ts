import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html::-webkit-scrollbar {
    width: 0px; /* For Chrome, Safari, and Opera */
}
  body {
    background: #f2f2f2;
    color: #FFF;
    -webkit-font-smoothing: antialiased;

  }

  #root{
    height: 100vh;
  }
  body, input, button {
    font-family: 'Verdana', serif;
    font-size: 1em;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`;
