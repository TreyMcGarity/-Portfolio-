import React from 'react';
import '../sass/Module.scss';

const Module = props => {
    console.log(props)
    const handleProject = () => {
        if (props.title === "Save The Animals") {
            return (
            <div className="module">
                <img className="image" src={props.first} alt="first"/>
                <img className="image" src={props.second} alt="second"/>
                <img className="image" src={props.third} alt="third"/>
            </div>
            )
        }
        else if (props.title === "Coach Me") {
            return (
            <div className="module">
                <img className="image" src={props.first} alt="first"/>
                <img className="image" src={props.second} alt="second"/>
                <img className="image" src={props.third} alt="third"/>
            </div>
            )
        }
        else if (props.title === "Smurf Village") {
            return (
            <div className="module">
                <img className="image" src={props.first} alt="first"/>
                <img className="image" src={props.second} alt="second"/>
                <img className="image" src={props.third} alt="third"/>
            </div>
            )
        }
        else if (props.title === "Bubbles") {
            return (
            <div className="module">
                <img className="image" src={props.first} alt="first"/>
                <img className="image" src={props.second} alt="second"/>
                <img className="image" src={props.third} alt="third"/>
            </div>
            )
        }
        else {
            return "Not Optional"
        }
    }    
    return (
        <div>
            {handleProject()}
        </div>
    )
}

export default Module;