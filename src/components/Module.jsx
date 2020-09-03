import React from 'react';
import '../sass/Module.scss';

const Module = props => {
    return (
        <div className="module" onClick={() => {props.setShow(false)}}>
            <img className="image" src={props.first} alt="first"/>
            <img className="image" src={props.second} alt="second"/>
            <img className="image" src={props.third} alt="third"/>
        </div>
    )
}

export default Module;