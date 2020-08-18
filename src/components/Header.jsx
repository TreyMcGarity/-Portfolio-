import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home Page</Link>
            <Link to="/about">About Myself</Link>
            <h1>Trey McGarity</h1>
        </div>
    )
}

export default Header;