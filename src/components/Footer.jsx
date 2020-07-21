import React from 'react';
import Github from '../utils/images/github-logo.png';
import LinkedIn from '../utils/images/linkedin-logo.png';
import Facebook from '../utils/images/facebook-logo.png';
import '../sass/Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
        <a href="https://github.com/TreyMcGarity">
            <img className="link github fade fade-into" src={Github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/trey-mcgarity-3a0079196/">
            <img className="link linkedin fade fade-into" src={LinkedIn} alt="linkedin" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100004535505847">
            <img className="link facebook fade fade-into" src={Facebook} alt="facebook" />
        </a>
    </div>
  );
}

export default Footer;