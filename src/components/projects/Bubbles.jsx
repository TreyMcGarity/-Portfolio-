import React, { useState } from 'react';
import Card from '../Card';
import Module from '../Module';
import Backdrop from '../Backdrop';

const Bubbles = () => {
    const [show, setShow] = useState(false)
    const title = "React Bubbles"
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
    // need to host server for access to bubble page!
    const deploy_link = "https://reacts-bubbles.vercel.app/"
    const github_link = "https://github.com/TreyMcGarity/react-bubbles"

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
export default Bubbles;