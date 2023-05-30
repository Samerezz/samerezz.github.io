import './Card.css';
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
    return (
        <div className='card'>
            <img className='card-image' src={props.coverURL} />
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-description'>{props.description}</p>

            <button className='card-button' onClick={() => { open(props.url) }}>
                Play
            </button>
        </div>
    )
}
export default Card;