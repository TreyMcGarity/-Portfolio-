import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';

const Bubbles = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            {
            show 
            ?
                <div>
                    <Module
                        first={""}
                        second={""}
                        third={""}
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