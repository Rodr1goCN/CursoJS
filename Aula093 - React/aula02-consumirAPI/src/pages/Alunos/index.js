import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa'
import { toast} from 'react-toastify';

import { Container } from "../../styles/GlobalStyles";
import { AlunoContainer, ProfilePicture } from "./styled";
import axios from "../../services/axios";

import Loading from "../../components/Loading";

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    async function getData(){
        setIsLoading(true);
      const response = await axios.get('/alunos')
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const hanbleDeleteAsk = e => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async(e, id, index) => {
    e.persist()
    try {
        setIsLoading(true);
        await axios.delete(`/alunos/${id}`)
        const novosAlunos = [...alunos];
        novosAlunos.splice(index, 1);
        setAlunos(novosAlunos);
        setIsLoading(false);
    } catch (err) {
        const status = get(err, 'response.status', 0);

        if(status === 401){
          toast.error('Você precisa fazer o login novamente');
          
        }else{
          toast.error('Ocorreu um erro ao excluir aluno');
        }
        setIsLoading(false);
    }
  }

  return (
    <Container>
        <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
          {get(aluno, 'Fotos[0].url', false) ? (<img src={aluno.Fotos[0].url} alt="" />) : (<FaUserCircle size={30} />)}
          </ProfilePicture>
          <span>{aluno.nome}</span>
          <span>{aluno.email}</span>

          <Link to={`/aluno/${aluno.id}/edit`}><FaEdit size={15} /></Link>

          <Link onClick={hanbleDeleteAsk} to={`/aluno/${aluno.id}/delete`}><FaWindowClose size={15} /></Link>
          <FaExclamation 
          size={15} display='none' cursor='pointer' onClick={e => handleDelete(e, aluno.id, index)}/>
          </div>
          
        ))}
      </AlunoContainer>
    </Container>
  );
}
