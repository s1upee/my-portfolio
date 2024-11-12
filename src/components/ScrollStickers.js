import React, { useEffect, useState } from 'react';
import './ScrollStickers.css'; // External CSS for styling

const ScrollStickers = () => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const newStickers = [];
    const numberOfStickers = 50;  // Number of emojis to be displayed
    const existingPositions = [];

    // Generate random positions for the emojis
    for (let i = 0; i < numberOfStickers; i++) {
      let randomX, randomY;
      let overlap = false;

      // Ensure random positions do not overlap
      do {
        randomX = Math.random() * 100;  // Random X position (0% to 100%)
        randomY = Math.random() * 100;  // Random Y position (0% to 100%)

        overlap = checkOverlap(randomX, randomY, existingPositions);
      } while (overlap);

      existingPositions.push({ x: randomX, y: randomY });

      newStickers.push({
        id: i,
        x: randomX,
        y: randomY,
        emoji: getRandomEmoji(),
      });
    }

    setStickers(newStickers);
  }, []);

  // Helper function to get a random emoji
  const getRandomEmoji = () => {
    const emojis = ['🩷', '🌸', '🎀', '🌟', '✨', '💫', '🍀', '🍃'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  // Helper function to check for overlap
  const checkOverlap = (randomX, randomY, existingPositions) => {
    for (let pos of existingPositions) {
      if (Math.abs(pos.x - randomX) < 5 && Math.abs(pos.y - randomY) < 5) {
        return true; // Return true if overlap is found
      }
    }
    return false; // No overlap found
  };

  return (
    <div className="stickers">
      {stickers.map((sticker) => (
        <div
          key={sticker.id}
          className="sticker"
          style={{
            left: `${sticker.x}%`,
            top: `${sticker.y}%`,
            animation: `move-around ${Math.random() * 10 + 5}s infinite`,  // Random animation duration
          }}
        >
          {sticker.emoji}
        </div>
      ))}
    </div>
  );
};

export default ScrollStickers;
