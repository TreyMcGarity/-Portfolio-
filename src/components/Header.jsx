import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="tabs">
                <Link className="tab hover" to="/">My Projects</Link>
                <Link className="tab hover" to="/about">About Myself</Link>
            </div>
            <h1>Trey McGarity</h1>
        </div>
    )
}

export default Header;