import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
     margin : 0;
     box-sizing : border-box;
     padding : 0;
     font-family: 'Montserrat', sans-serif;
 }
 html, body{
     overflow-x: hidden;
 }
`;

export default GlobalStyle;