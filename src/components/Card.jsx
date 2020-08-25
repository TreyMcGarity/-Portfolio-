import React from 'react';
import Module from './Module.jsx';
import '../sass/Card.scss';

const Card = props => {
    return (
        <div>
            {props.show 
            ?
            <div onClick={() => {props.setShow(false)}}>
                <Module 
                    first={props.first}
                    second={props.second}
                    third={props.third}
                />
            </div>
            :
            <div className="card" onClick={() => {props.setShow(true)}}>
                <p>{props.title}</p>
            </div>
            }
        </div>
    )
}

export default Card;