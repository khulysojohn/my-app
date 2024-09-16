import React, { useState, useEffect } from 'react';

const pictures = [
  'https://web.facebook.com/share/47RSw42dN2nfuU4o/',
  'https://web.facebook.com/share/oFSWuYr8wesNKxzs/',
  'https://web.facebook.com/share/dKPwfz8Wxh6vNSeB/',
  'https://web.facebook.com/share/npZSDpJCxRXfvd4Q/',
];

const Media = () => {
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const [direction, setDirection] = useState('left'); // Controls the sliding direction

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentPicIndex + 1) % pictures.length; // Loop through the pictures array
      const randomDirection = Math.random() > 0.5 ? 'left' : 'right'; // Set random direction
      setDirection(randomDirection);
      setCurrentPicIndex(nextIndex);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentPicIndex]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#8d450c]">
      <div className='image-container'>
      <img
          src={pictures[currentPicIndex]}
          alt="Sliding"
          className={`sliding-image ${direction}`}
        />
      </div>
        
      
    </div>
  );
};

export default Media;
