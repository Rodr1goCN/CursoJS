import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

/* import axios from '../../services/axios'; */

export default function Login() {
  /* React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;
      // eslint-disable-next-line no-console
      console.log(data);
    }

    getData();
  }, []); */

  return (
    <Container>
      <Title isRed>
        Login
        <small>OLAAAAAA</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button"> Enviar</button>
    </Container>
  );
}
