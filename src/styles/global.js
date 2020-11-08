import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    font-family: OurFont, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    overflow-x: hidden;
    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text} !important;
  }

  .nav-link{
    color: #004178;
    padding: 8px 8px 8px 0;
    margin-right: 12px;
  }

  .nav-link:hover{
    color: #fff;
  }
`;
