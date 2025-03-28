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
          <li>Pursuing M.Sc. (Tech) in Information Networks (2023 - Present)</li>
            <li>B.Sc. (Tech) in Bioinformation Technology (2019 - 2023)</li>
          </ul>
        </div>

        <div className="section">
          <span className="section-title">Some fun skills:</span>
          <ul>
            <li>Figma</li>
            <li>Premiere Pro</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Python</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="section">
          <span className="section-title">What I've done so far:</span>
          <ul>
            <li>Course Assistant</li>
            <li><p className="custom-underheading">Aalto University | Fall semesters 2023, 2024</p></li>
            <li><p>Guided students in debugging and UX-friendly code practices, improving course material usability.</p></li>
            <li>Marketing Intern</li>
            <li><p className="custom-underheading">Aalto University Summer School | 2023</p></li>
            <li><p>Managed the creation of online content, including news, interviews, and the design and editing of various brochures. Focused on producing visually appealing materials that  aligned with the university’s brand and enhanced information clarity.</p></li>
            <li>Barista</li>
            <li><p className="custom-underheading">Way Bakery & Café Marocco | 2018-2023</p></li>
            <li><p>Developed perseverance, independent decision-making, and adaptability in working with diverse customer needs. Also responsible for training new employees.</p></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default AboutPage;