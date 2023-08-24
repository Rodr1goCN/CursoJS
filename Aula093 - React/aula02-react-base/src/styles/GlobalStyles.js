import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${primaryDarkColor};
}
html, body, #root{
  height: 100%;
}
button{
  cursor: pointer;
  background: ${primaryColor};
  border: none;
  padding: 5px;
  border-radius: 4px;
  font-weight: 700;
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
`;

export const Container = styled.section`
  max-width: 400px;
  background: white;
  margin: 30px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.25);
`;
