import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import Backdrop from './Backdrop';
import clientLogin from '../utils/images/screenShots/client-login.png';
import coachLogin from '../utils/images/screenShots/coach-login.png';
import coachDashboard from '../utils/images/screenShots/coach-dashboard.png';

const CoachMe = () => {
    const [show, setShow] = useState(false)
    const title = "Coach Me"
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
                    title={title}
                    setShow={setShow}
                    slide={slide}
                    description={description}
                    link={link}
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
export default CoachMe;