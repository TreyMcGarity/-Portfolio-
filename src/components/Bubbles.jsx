import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';

const Bubbles = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            {
            show 
            ?
                <Module
                    first={""}
                    second={""}
                    third={""}
                    setShow={setShow}
                />
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