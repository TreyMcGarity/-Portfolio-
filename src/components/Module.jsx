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
          case 1: return (
            <div className="content">
                <img className="image" src={props.slide.first} alt="first"/>
                <p>{props.description.first}</p>
            </div>
          )
          case 2: return (
            <div className="content">
                  <img className="image" src={props.slide.second} alt="second"/>
                  <p>{props.description.second}</p>
              </div>
          )
          case 3: return (
            <div className="content">
                  <img className="image" src={props.slide.third} alt="third"/>
                  <p>{props.description.third}</p>
              </div>
          )
          default: return (
            <div className="content">
                <img className="image" src={props.slide.first} alt="first"/>
                <p>{props.description.first}</p>
            </div>
          )
        }
    }

    return (
        <div className="module">
            <div 
                className="close-btn"
                onClick={() => {props.setShow(false)}}
            >
                Close
            </div>
            <div className="carousel">
                <img className="arrow" src={Left} alt="left-arrow" onClick={() => handleSlides("dec")}/>
                {handlePanel(slide)}   
                <img className="arrow" src={Right} alt="right-arrow" onClick={() => handleSlides("inc")}/>
            </div>
            <a href={props.link}>Github</a>
        </div>
    )
}

export default Module;