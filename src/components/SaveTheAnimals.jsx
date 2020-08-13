import React, { useState } from 'react';
import Module from '../components/Module';
import Card from '../components/Card';
import HomeTop from '../utils/images/screenShots/save-the-animals-home-top.png';
import HomeBottom from '../utils/images/screenShots/save-the-animals-home-bottom.png';
import AboutMember from '../utils/images/screenShots/save-the-animals-about-member.png';

const SaveTheAnimals = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="save-the-animals">
    {
      show
      ?
      <Module first={HomeTop} second={HomeBottom} third={AboutMember} />
      :
      <Card show={show} setShow={setShow} />
    }
    </div>
  );
}

export default SaveTheAnimals;