import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import HomeTop from '../utils/images/screenShots/save-the-animals-home-top.png';
import HomeBottom from '../utils/images/screenShots/save-the-animals-home-bottom.png';
import AboutMember from '../utils/images/screenShots/save-the-animals-about-member.png';
import About from './About';

const SaveTheAnimal = props => {
    const [show, setShow] = useState(false)

    return (
        <div>
            {
            show 
            ?
                <Module
                    first={HomeTop}
                    second={HomeBottom}
                    third={AboutMember}
                    setShow={setShow}
                />
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