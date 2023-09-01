import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export const FaUserCircle = styled.img``;
export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${colors.primaryDarkColor};
}
html, body, #root{
  height: 100%;
}
button{
  cursor: pointer;
  background: ${colors.primaryColor};
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
body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.successColor};
  color: #000000c7;
}
body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
  color: #000000c7;
}
`;

export const Container = styled.section`
  max-width: 550px;
  background: white;
  margin: 30px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.25);
`;
