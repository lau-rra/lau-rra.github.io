import React, { useState } from 'react';
import './FrontPage.css';
import Box from '../components/Box.jsx';
import Game from '../components/Game.jsx';

function Container() {
  const [activeBox, setActiveBox] = useState(null); // State to track the active box
  const [showGame, setShowGame] = useState(false); // State to track whether to show the game

  // Function to handle box clicks
  const handleBoxClick = (imgSrc, altText) => {
    if (imgSrc === '/images/blizzard.gif') {
      // Toggle the game visibility for the Blizzard box
      setShowGame((prev) => !prev);
      setActiveBox(null); // Clear the active box to hide any other images
    } else {
      // For other boxes, show the image
      if (activeBox && activeBox.imgSrc === imgSrc) {
        // If the same box is clicked again, hide the image
        setActiveBox(null);
      } else {
        // Otherwise, show the new image
        setActiveBox({ imgSrc, altText });
      }
      setShowGame(false); // Hide the game if it's visible
    }
  };

  return (
    <>
      <div className="container">
        <Box
          imgSrc="/images/stars.gif"
          altText="Flashing colors"
          onClick={() => handleBoxClick('/images/stars.gif', 'Flashing colors')}
        />
        <Box
          imgSrc="/images/blizzard.gif"
          altText="Blizzard animation"
          onClick={() => handleBoxClick('/images/blizzard.gif', 'Blizzard animation')}
        />
        <Box
          imgSrc="/images/gems.gif"
          altText="Gems falling"
          onClick={() => handleBoxClick('/images/gems.gif', 'Gems falling')}
        />
        <Box
          imgSrc="/images/workpic.png"
          altText="Picture of students"
          onClick={() => handleBoxClick('/images/workpic.png', 'Work picture')}
        />

        {/* Conditionally render the image and text */}
        {activeBox && (
          <div className="image-display">
            <img src={activeBox.imgSrc} alt={activeBox.altText} />
            <p>{activeBox.altText}</p>
          </div>
        )}

        {/* Conditionally render the game */}
        {showGame && (
          <div className="game-display">
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