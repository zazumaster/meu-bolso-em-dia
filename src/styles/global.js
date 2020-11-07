import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body{
    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
    font-family: Arial, Helvetica, sans-serif;
    font: 400 14px Ubuntu, sans-serif;
  }
`;
