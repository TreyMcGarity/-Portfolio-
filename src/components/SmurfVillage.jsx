import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';

const SmurfVillage = props => {
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
                    title={"Smurf Village"}
                    setShow={setShow}
                />
            }
        </div>
    )
}
export default SmurfVillage;