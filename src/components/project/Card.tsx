import './Card.css';
import { useState } from 'react';
interface CardProps {
    title: string;
    url: string;
    description: string;
    coverURL: string;
    animatedURL?: string;
    publishDate: Date;
    isGame: boolean;
}
function Card(props: CardProps) {
    const [url,setURL] = useState(props.coverURL);
    return (
        <div className='card'>
            <img className='card-image' src={url} />
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-description'>{props.description}</p>

            <button className='card-button' onClick={() => { open(props.url) }}>
                Play
            </button>
        </div>
    )
}
export default Card;