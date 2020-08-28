import React from 'react';
import '../sass/Module.scss';

const Module = props => {
    console.log(props)
    const handleProject = () => {
        switch (props.id) {
        case 0: 
            return (
            <div className="module">
                <img className="image" src={props.first} alt="first"/>
                <img className="image" src={props.second} alt="second"/>
                <img className="image" src={props.third} alt="third"/>
            </div>
            )
        case 1:        
            return (
            <div className="module">
                <img className="image" src={props.first} alt="first"/>
                <img className="image" src={props.second} alt="second"/>
                <img className="image" src={props.third} alt="third"/>
            </div>
            )
        case 2: 
            return (
            <div className="module">
                <img className="image" src={props.first} alt="first"/>
                <img className="image" src={props.second} alt="second"/>
                <img className="image" src={props.third} alt="third"/>
            </div>
            )
        case 3:        
            return (
            <div className="module">
                <img className="image" src={props.first} alt="first"/>
                <img className="image" src={props.second} alt="second"/>
                <img className="image" src={props.third} alt="third"/>
            </div>
            )
        default: return "Not Optional"
        }  
    }  
    return (
        <div>
            {handleProject()}
        </div>
    )
}

export default Module;