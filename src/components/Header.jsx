import React from 'react';
import Github from '../utils/images/github-logo.png';
import LinkedIn from '../utils/images/linkedin-logo.png';
import Facebook from '../utils/images/facebook-logo.png';
import { Link } from 'react-router-dom';
import '../sass/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="tabs">
                <Link className="tab hover" to="/">My Projects</Link>
                <Link className="tab hover" to="/about">About Myself</Link>
            </div>
            <div className="name-links">
                <h1>Trey McGarity</h1>
                <div className="social-links hover">
                    <a href="https://github.com/TreyMcGarity">
                        <img 
                        className="link github fade" 
                        src={Github} 
                        alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/trey-mcgarity-2a18a8210/">
                        <img 
                        className="link linkedin fade" 
                        src={LinkedIn} 
                        alt="linkedin" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100004535505847">
                        <img 
                        className="link facebook fade" 
                        src={Facebook} 
                        alt="facebook" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;