import React, { useState } from 'react';
import Card from './Card';
import Module from './Module';
import clientLogin from '../utils/images/screenShots/client-login.png';
import coachLogin from '../utils/images/screenShots/coach-login.png';
import coachDashboard from '../utils/images/screenShots/coach-dashboard.png';
const CoachMe = props => {
    const [show, setShow] = useState(false)

    return (
        <div>
            {
            show 
            ?
                <Module
                    first={clientLogin}
                    second={coachLogin}
                    third={coachDashboard}
                    setShow={setShow}
                />
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