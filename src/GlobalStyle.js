import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import ManropeRegular from './fonts/Manrope-Regular.ttf';
import ManropeLight from './fonts/Manrope-Light.ttf';
import ManropeSemiBold from './fonts/Manrope-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Manrope';
  src: local('Manrope-Regular'), local('Manrope-Light'),
    local('Manrope-SemiBold'),
    url(${ManropeRegular}) format('truetype'),
    url(${ManropeLight}) format('truetype'),
    url(${ManropeSemiBold}) format('truetype');
}
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Manrope', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

ul,
ol {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

button{
  cursor: pointer;
  display: inline-block;
}

a {
    text-decoration: none;
}`;
