import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';

const SmurfVillage = () => {
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
                    title={"Smurf Village"}
                    setShow={setShow}
                />
            }
        </div>
    )
}
export default SmurfVillage;