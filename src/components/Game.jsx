import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import BlizzardGame from './BlizzardGame';
import './Game.css';

const Game = () => {
  const sketchRef = useRef();
  const p5InstanceRef = useRef(null);

  useEffect(() => {
    if (!sketchRef.current || p5InstanceRef.current) return;

    // Clear the container completely (important for StrictMode) to avoid double canvas
    while (sketchRef.current.firstChild) {
      sketchRef.current.removeChild(sketchRef.current.firstChild);
    }

    // Create new p5 instance
    p5InstanceRef.current = new p5((p) => {
      BlizzardGame(p);
    }, sketchRef.current);

    // Cleanup function
    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
      
      // Extra cleanup to clear the container again to avoid double canvas
      if (sketchRef.current) {
        while (sketchRef.current.firstChild) {
          sketchRef.current.removeChild(sketchRef.current.firstChild);
        }
      }
    };
  }, []); // Empty dependency array - runs once on mount

  return (
    <div className="game-display">
      <div ref={sketchRef}></div>
    </div>
  );
};

export default Game;