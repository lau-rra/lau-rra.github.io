import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import BlizzardGame from './BlizzardGame';
import './Game.css';

const Game = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = new p5((p) => {
      // Pass the p5 instance to BlizzardGame
      BlizzardGame(p);
    }, sketchRef.current);

    // Cleanup
    return () => {
      sketch.remove();
    };
  }, []);

  return (
    <div className="game-display">
      <div ref={sketchRef}></div>
    </div>
  );
};

export default Game;