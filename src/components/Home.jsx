import React from 'react';
import Picture from '../utils/images/TREY.jpg';
import Resume from '../utils/documents/Resume.docx';
import '../sass/Home.scss';

const Home = () => {
  return (
    <div className="home" id="home">
      <img className="pic" src={Picture} alt="about-pic" />
      <div className="content"> 
        <h1 className="name">Trey McGarity</h1>
        <div className="info">
          <p>trey.mcgarity99@gmail.com</p>
          <p>(256) 929-3066</p>
          <a href={Resume}>Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Home;