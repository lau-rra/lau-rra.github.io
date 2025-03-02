import React, { useState, useEffect } from 'react';
import './ImageReveal.css';

function ImageReveal() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded); //Toggle visibility on mobile
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsExpanded(false); // Collapse the bubble when the user scrolls
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //New implementation: Close the bubble when changing the tab?

  return (
    <div
      className={`image-container ${isExpanded ? 'expanded' : ''}`}
      onClick={handleClick}
    >
      <img
        src="/images/speechbubble.svg"
        alt="Revealable Contacts"
        className="revealable-image"
      />
      <div className="image-text">
        <p>Contact me by email: laura.lumijarvi[at]gmail.com<br />or Linkedin @lauralumijarvi</p>
      </div>
    </div>
  );
}



export default ImageReveal;
