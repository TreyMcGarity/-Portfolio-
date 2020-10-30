import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';
import HomeTop from '../utils/images/screenShots/save-the-animals-home-top.png';
import HomeBottom from '../utils/images/screenShots/save-the-animals-home-bottom.png';
import AboutMember from '../utils/images/screenShots/save-the-animals-about-member.png';

const SaveTheAnimal = () => {
    const [show, setShow] = useState(false)
    const title = "Save The Animals"
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
    const deploy_link = ""
    const github_link = "https://github.com/TreyMcGarity/mcgarity-marketing-page/tree/trey-mcgarity"

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
                        webpage={deploy_link}
                        github={github_link}
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
export default SaveTheAnimal;