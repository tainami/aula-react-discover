import './style.css';

export function Card(props) {
    return (
        <div className='divCard'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

