import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as examplesActions from '../../store/modules/example/action';

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
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(examplesActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title isRed>
        Login
        <small>OLAAAAAA</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        {' '}
        Enviar
      </button>
    </Container>
  );
}
