import React from 'react';
import Github from '../utils/images/github-logo.png';
import LinkedIn from '../utils/images/linkedin-logo.png';
import Facebook from '../utils/images/facebook-logo.png';
import '../sass/Media.scss';

const Media = () => {
  return (
    <div className="social-links hover">
                <a href="https://github.com/TreyMcGarity">
                    <img className="link github fade" src={Github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/trey-mcgarity-3a0079196/">
                    <img className="link linkedin fade" src={LinkedIn} alt="linkedin" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100004535505847">
                    <img className="link facebook fade" src={Facebook} alt="facebook" />
                </a>
            </div>
  );
}

export default Media;