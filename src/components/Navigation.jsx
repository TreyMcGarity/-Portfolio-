import React, { useState } from 'react';
import '../sass/Navigation.scss';

const Navigation = () => {
    return (
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
        </nav>
    )
}

export default Navigation;