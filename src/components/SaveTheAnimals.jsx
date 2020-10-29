import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';
import HomeTop from '../utils/images/screenShots/save-the-animals-home-top.png';
import HomeBottom from '../utils/images/screenShots/save-the-animals-home-bottom.png';
import AboutMember from '../utils/images/screenShots/save-the-animals-about-member.png';

const SaveTheAnimal = () => {
    const [show, setShow] = useState(false)
    const slide = {
        first: HomeTop,
        second: HomeBottom,
        third: AboutMember
    }
    const description = {
        first: "Mobile Home Top of the Page.",
        second: "Desktop Home Bottom of the Page.",
        third: "About Members Page screenshot."
    }
    const link = "https://github.com/TreyMcGarity/mcgarity-marketing-page/tree/trey-mcgarity"

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
                    title={"Save The Animals"}
                    setShow={setShow}
                />
            }
        </div>
    )
}
export default SaveTheAnimal;