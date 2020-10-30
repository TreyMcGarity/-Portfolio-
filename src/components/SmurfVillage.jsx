import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';

const SmurfVillage = () => {
    const [show, setShow] = useState(false)
    const title = "Smurf Village"
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
    const link = "https://github.com/TreyMcGarity/Sprint-Challenge-State-Management-Smurfs"

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
export default SmurfVillage;