import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: black;
    margin: 0 10px;
    font-weight: bold;
  }
`;
