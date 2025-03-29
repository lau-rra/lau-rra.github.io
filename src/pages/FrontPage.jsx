import React, { useState } from 'react';
import './FrontPage.css';
import Box from '../components/Box.jsx';
import Game from '../components/Game.jsx';
import textContent from '../components/textContent.js';

function Container() {
  const [activeBox, setActiveBox] = useState(null); /*State to track the active box*/
  const [showGame, setShowGame] = useState(false); /*State to track whether to show the game*/

  /*Function to handle box clicks*/
  const handleBoxClick = (imgSrc, altText, heading) => {
    if (imgSrc === '/images/blizzard.gif') {
      // Toggle the game visibility for the snow game
      setShowGame((prev) => !prev);
      setActiveBox(null); /*Clear the active box to hide any other images*/
    } else {
      // For other boxes, show the image
      if (activeBox && activeBox.imgSrc === imgSrc) {
        // If the same box is clicked again: hide the image
        setActiveBox(null);
      } else {
        // Otherwise: show the new image
        setActiveBox({ imgSrc, altText, heading });
      }
      setShowGame(false); /*Hide the game if it's visible*/
    }
  };

  return (
    <>
      <div className="container">
        <Box
          imgSrc="/images/stars.gif"
          altText="Flashing colors"
          onClick={() => handleBoxClick('/images/stars.gif', textContent.stars, textContent.starsHeading)}
        />
        <Box
          imgSrc="/images/blizzard.gif"
          altText="Blizzard animation"
          onClick={() => handleBoxClick('/images/blizzard.gif', textContent.game, textContent.gameHeading)}
        />
        <Box
          imgSrc="/images/gems.gif"
          altText="Gems falling"
          onClick={() => handleBoxClick('/images/gems.gif', textContent.gems, textContent.gemsHeading)}
        />
        <Box
          imgSrc="/images/workpic.png"
          altText="Picture of students"
          onClick={() => handleBoxClick('/images/workpic.png', textContent.picture, textContent.pictureHeading)}
        />
        <Box
          imgSrc="/images/rappu-still.png"
          altText="Animated drawing"
          onClick={() => handleBoxClick('/images/rappu.gif', textContent.animation, textContent.animationHeading)}
        />
        <Box
          imgSrc="/images/film.gif"
          altText="Super8 film clip"
          onClick={() => handleBoxClick('/images/film.gif', textContent.film, textContent.filmHeading)}
        />

        {/* Conditionally render the image and text */}
        {activeBox && (
          <div className="image-display">
            <span className="description-heading">{activeBox.heading}</span>
            <p>{activeBox.altText}</p>
            <img src={activeBox.imgSrc} alt={activeBox.altText} />
          </div>
        )}

        {/* Conditionally render the game */}
        {showGame && (
          <div className="game-display">
            <span className="description-heading">Games and interactive design</span>
            <p>{textContent.game}</p>
            <Game />
          </div>
        )}
      </div>
    </>
  );
}

function FrontPage() {
  return (
    <>
      <div>
        <Container />
      </div>
    </>
  );
}

export default FrontPage;