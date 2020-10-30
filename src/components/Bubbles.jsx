import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';

const Bubbles = () => {
    const [show, setShow] = useState(false)
    const title = "React Bubbles"
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
    const link = "https://github.com/TreyMcGarity/react-bubbles"

    return (
        <div>
            {
            show 
            ?
                <div>
                    <Module
                        title={title}
                        setShow={setShow}
                        slide={slide}
                        description={description}
                        link={link}
                    />
                    <Backdrop 
                        status={show} 
                        set={setShow}
                    />
                </div>
            :
                <Card 
                    title={title}
                    setShow={setShow}
                />
            }
        </div>
    )
}
export default Bubbles;