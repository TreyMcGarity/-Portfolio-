import React, {useState} from 'react';
import Left from '../utils/images/left-arrow.png';
import Right from '../utils/images/right-arrow.png';
import '../sass/Module.scss';

const Module = props => {
    const minimum = 1
    const maximum = 3
    let [slide, setSlide] = useState(1);

    const handleSlides = command => {
        if (command === "dec") {
            if (slide === minimum) {
                setSlide(maximum)
            } else {
                setSlide(--slide)
            }
        }
        else if (command === "inc") {
            if (slide === maximum) {
                setSlide(minimum)
            } else {
                setSlide(++slide)
            }        
        }
    }

    const handlePanel = value => {
        switch (value) {
          case 1: return <img className="image" src={props.first} alt="first"/>
          case 2: return <img className="image" src={props.second} alt="second"/>
          case 3: return <img className="image" src={props.third} alt="third"/>
          default: return <img className="image" src={props.first} alt="first"/>
        }
    }

    return (
        <div className="module">
            <button onClick={() => {props.setShow(false)}}>Close</button>
            <div className="carousel">
                <img className="arrow" src={Left} alt="left-arrow" onClick={() => handleSlides("dec")}/>
                {handlePanel(slide)}   
                <img className="arrow" src={Right} alt="right-arrow" onClick={() => handleSlides("inc")}/>
            </div>
        </div>
    )
}

export default Module;