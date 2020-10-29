import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';

const SmurfVillage = () => {
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
                    title={"Smurf Village"}
                    setShow={setShow}
                />
            }
        </div>
    )
}
export default SmurfVillage;