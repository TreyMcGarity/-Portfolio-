import React from 'react';
import arrowLeft from '../utils/images/left-arrow.png';
import arrowRight from '../utils/images/right-arrow.png';

const Module = props => {
    return (
    <div className="projects" id="projects">
        {/* <button onClick={props.setShow(!props.show)}>Close</button> */}
        {/* <img onClick={() => setCurrent(!current)} src={arrowLeft} alt="left arrow"/> */}
        <img className="project" src={props.first} alt="first"/>
        <img className="project" src={props.second} alt="second"/>
        <img className="project" src={props.third} alt="third"/>
        {/* <img onClick={() => setCurrent(!current)} src={arrowRight} alt="right arrow"/> */}
    </div>
    )
}

export default Module;