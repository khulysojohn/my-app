import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

// Dynamically require all images in the folder
const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const pictures = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const Media = () => {
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPicIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    ScrollReveal().reveal('.gallery-section', {
      distance: '100px',
      origin: 'left', // Reveal from the left for the gallery
      duration: 2000,
      reset: true,
    });

    ScrollReveal().reveal('.video-embed', {
      distance: '100px',
      origin: 'right', // Reveal from the right for the video
      duration: 2000,
      reset: true,
    });
  }, []);

  const videos = [
    {
      title: 'Video 1',
      url: 'https://www.youtube.com/embed/SuWpBuVHqQo?si=Y4DWL9lY8XMFiHSH&amp'
    },
    {
      title: 'Video 2',
      url: 'https://www.youtube.com/embed/_W-Cpa5EhUw?si=Dr6kW-pqTtmAe65y&amp'
    },
    {
      title: 'Video 3',
      url: 'https://www.youtube.com/embed/_sHkEVBxBMA?si=likKVje7FqufpUSJ'
    }
  ];

  // Function to move to the next video
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to move to the previous video
  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="media-page w-100% h-100% pt-32 pb-20 bg-[#8d450c] flex flex-col md:flex-row gap-4 w-screen justify-between items-center">

      {/* Slideshow Section */}
      <div className="gallery-section px-8 text-orange-200 justify-center text-center">
        <h2 className="font-bold text-orange-200 mb-4">Recent Gallery</h2>
        <img
          src={pictures[currentPicIndex]}
          alt="Slideshow"
          className="media-item"
        />
      </div>

      {/* Video Embed Section */}
      <div className="video-embed px-4 pt-11 text-center">
        <h2 className='font-bold text-orange-200 mb-4'>Recent videos</h2>
        {/* Video Player with Navigation Arrows */}
        <div className="video-controls">
          <iframe
            src={videos[currentVideoIndex].url}
            className="media-item"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={videos[currentVideoIndex].title}
          ></iframe>
        </div>

        <button onClick={handlePreviousVideo} className="arrow-btn">
          &lt; {/* Left Arrow */}
        </button>
        <button onClick={handleNextVideo} className="arrow-btn">
          &gt; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default Media;
