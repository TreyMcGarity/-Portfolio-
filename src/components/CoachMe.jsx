import React, { useState } from 'react';
import Module from '../components/Module';
import Card from '../components/Card';
import clientLogin from '../utils/images/screenShots/client-login.png';
import coachLogin from '../utils/images/screenShots/coach-login.png';
import coachDashboard from '../utils/images/screenShots/coach-dashboard.png';

const CoachMe = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="coach-me">
        { show
        ?
        <Module first={clientLogin} second={coachLogin} third={coachDashboard} />
        :
        <Card
            name={"Coach Me"} 
            repo={"https://github.com/TreyMcGarity/coach-me-fe"}
            setShow={setShow} />
        }
        </div>
    );
}

export default CoachMe;