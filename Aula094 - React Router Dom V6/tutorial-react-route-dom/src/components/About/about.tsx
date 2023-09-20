import { useLocation } from 'react-router-dom';
import './style.css';

export const About = () => {
    const {state} = useLocation();
    
    return (
        <div>
            <h1>Sobre o site</h1>
            <p>{state}</p>
        </div>
    )
};