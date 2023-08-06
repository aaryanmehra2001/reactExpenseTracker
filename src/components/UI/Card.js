import './Card.css';

function Card (properties){
    const val = "card " + properties.className;
    return(
        <div className={val}>{properties.children}</div>
    );
}

export default Card