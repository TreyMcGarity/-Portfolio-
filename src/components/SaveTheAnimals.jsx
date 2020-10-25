import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';
import HomeTop from '../utils/images/screenShots/save-the-animals-home-top.png';
import HomeBottom from '../utils/images/screenShots/save-the-animals-home-bottom.png';
import AboutMember from '../utils/images/screenShots/save-the-animals-about-member.png';

const SaveTheAnimal = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            {
            show 
            ?
                <div>
                    <Module
                        first={HomeTop}
                        second={HomeBottom}
                        third={AboutMember}
                        setShow={setShow}
                    />
                    <Backdrop status={show} set={setShow}/>
                </div>
            :
                <Card 
                    title={"Save The Animals"}
                    setShow={setShow}
                />
            }
        </div>
    )
}
export default SaveTheAnimal;