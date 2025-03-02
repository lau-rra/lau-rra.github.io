import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="textcontainer">
      <div className="bodytext">
        <p>Hi, good to see you!</p>
        <p>I'm a creative mind and a certified good-time enthusiast, here to collaborate with you!</p>

        <div className="section">
          <span className="section-title">Degrees:</span>
          <ul>
            <li>B.Sc. (Tech) in Bioinformation Technology</li>
            <li>Pursuing M.Sc. (Tech) in Information Networks</li>
          </ul>
        </div>

        <div className="section">
          <span className="section-title">Skills:</span>
          <ul>
            <li>Premiere Pro</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;