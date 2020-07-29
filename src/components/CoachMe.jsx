import React from 'react';
import clientLogin from '../utils/images/screenShots/client-login.png';
import coachLogin from '../utils/images/screenShots/coach-login.png';
import coachDashboard from '../utils/images/screenShots/coach-dashboard.png';

const CoachMe = () => {
    return (
        <div className="coach-me">
            <img className="project" src={clientLogin} alt="client login"/>
            <img className="project" src={coachLogin} alt="coach login"/>
            <img className="project large" src={coachDashboard} alt="coach dashboard"/>
        </div>
    )
}

export default CoachMe;