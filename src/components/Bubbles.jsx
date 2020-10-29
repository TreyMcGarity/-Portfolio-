import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';

const Bubbles = () => {
    const [show, setShow] = useState(false)
    const slide = {
        first: "",
        second: "",
        third: ""
    }
    const description = {
        first: "first",
        second: "second",
        third: "third"
    }
    const link = ""

    return (
        <div>
            {
            show 
            ?
                <div>
                    <Module
                        slide={slide}
                        description={description}
                        link={link}
                        setShow={setShow}
                    />
                    <Backdrop status={show} set={setShow}/>
                </div>
            :
                <Card 
                    title={"React Bubbles"}
                    setShow={setShow}
                />
            }
        </div>
    )
}
export default Bubbles;