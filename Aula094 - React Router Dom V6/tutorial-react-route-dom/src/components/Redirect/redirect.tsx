import { useEffect, useRef, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
    const [time, setTime] = useState(3);
    const timeout = useRef(0);
    const navigate = useNavigate();

    useEffect(()=>{
       clearTimeout(timeout.current);

       timeout.current = setTimeout(() => {
        setTime((t) => t - 1);

        if(time <= 0){
            navigate('/about') /* Redirecionamento de páginas */
        }
       }, 1000) /* 1000 milisegundos = 1 segundo */

       return () => {
        clearTimeout(timeout.current);
    }
    },[navigate, time]);

    

    return (
        <div>
            <h1>Você ira sair daqui em: {time} segundos</h1>
        </div>
    )
}