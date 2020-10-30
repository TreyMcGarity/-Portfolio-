import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';
import clientLogin from '../utils/images/screenShots/client-login.png';
import coachLogin from '../utils/images/screenShots/coach-login.png';
import coachDashboard from '../utils/images/screenShots/coach-dashboard.png';

const CoachMe = () => {
    const [show, setShow] = useState(false)
    const slide = {
        first: clientLogin,
        second: coachLogin,
        third: coachDashboard
    }
    const description = {
        first: "Login Page for the Client User Type.",
        second: "Login Page for the Coach User Type.",
        third: "Main Dashboard Page for Coach User Type."
    }
    const link = "https://github.com/TreyMcGarity/coach-me-fe"

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
                    title={"Coach Me"}
                    setShow={setShow}
                />
            }
        </div>
    )
}
export default CoachMe;