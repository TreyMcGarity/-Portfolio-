import React from 'react';
import '../sass/Card.scss';

const Card = props => {
    return (
        <div>
            <div className="card" onClick={() => {props.setShow(true)}}>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Card;