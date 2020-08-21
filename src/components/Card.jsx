import React from 'react';
import '../sass/Card.scss';

const Card = props => {
    console.log(props)
    return (
        // <div onClick={props.setShow(true)}>
        <div className="card">
            <p>{props.title}</p>
            <div className="card-content hover">
                <a href={props.hosted}>Website</a>
                <a href={props.repo}>Repository</a>
            </div>
        </div>
    )
}

export default Card;