import React from 'react';
import './assets/style.css';
import imageDirectory from './assets/laptop.jpg';

function App() {
  return (
      <div className="App">
        <header>
          <div className="left_position">Ilya Kripaka</div>
          <div className="right_position">
            <ul className="hr">
              <li><a href="#">Home</a></li>
              <li><a href="https://www.instagram.com/ilyakripaka/">Instagram</a></li>
              <li><a href="https://www.facebook.com/kripaka.illya">Facebook</a></li>
            </ul>
          </div>
          <img src={imageDirectory} className="process_image" alt=""/>
          <section className="process_text">
            <h1>Resume</h1>
            <p><b>Education</b></p>
            <p>I finished Adapted Sanford P2P course CS106A+CS106B at Ш++.</p>
            <p><b>Main goal</b></p>
            <p>Become successful web developer</p>
            <p><b>My temper</b></p>
            <ul className="left_padding">
              <li>purposeful</li>
              <li>persistent</li>
              <li>benevolent</li>
            </ul>
            <p><b>Occupation</b></p>
            <p>Firstly I adore playing basketball with my friends, because it is team game that
              rally each team member</p>
            <p>Secondly ...</p>
          </section>
        </header>
        <footer>
          <div className="center-footer">
            <p><a href="https://github.com/ikripaka">My github </a></p>
          </div>
        </footer>
      </div>
  );
}

export default App;
