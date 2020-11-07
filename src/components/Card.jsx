import React from 'react';
import '../sass/Card.scss';

const Card = props => {
    return (
        <div>
            <div className="card" onClick={() => {props.setShow(true)}}>
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}

export default Card;