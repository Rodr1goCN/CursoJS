import { useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const Posts = () => {
    const params = useParams();
    const {id} = params;
    const [qs] = useSearchParams();
    return (
        <div>
            <h1>Post do site {`Para: ${id}`} {`QS: ${qs.get('segunda')}`}</h1>{/* (link = http://localhost:5173/posts/10?page=200&segunda=terca) ele mostra o que vem depois de segunda que esta no link*/}
        </div>
    )
}