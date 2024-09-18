import React, { useState, useEffect } from 'react';

// Dynamically require all images in the folder
const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const pictures = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const Media = () => {
  const [currentPicIndex, setCurrentPicIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPicIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const videos = [
    {
      title: 'Video 1',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Video 2',
      url: 'https://www.youtube.com/embed/tgbNymZ7vqY'
    },
    {
      title: 'Video 3',
      url: 'https://www.youtube.com/embed/VIDEO_ID_3'
    }
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to move to the next video
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to move to the previous video
  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="media-page w-full h-screen py-32 bg-[#8d450c] ">

      <div className="content-container flex flex-col md:flex-row gap-4  justify-center items-center">
        {/* Slideshow Section */}
        <div className="gallery-section mx-4 w-50%text-center">
          <h2 className="font-bold text-orange-200 mb-4">Recent Gallery</h2>
          <img
            src={pictures[currentPicIndex]}
            alt="Slideshow"
            className="media-item"
          />
        </div>

        {/* Video Embed Section */}
        <div className="video-embed-container text-center">
          <h2 className='font-bold text-orange-200 mb-4'>Rencent videos</h2>
          {/* Video Player with Navigation Arrows */}
          <div className="video-controls">
            <button onClick={handlePreviousVideo} className="arrow-btn">
              &lt; {/* Left Arrow */}
            </button>

            <div className="video-container inline-block">
              <iframe
              
                src={videos[currentVideoIndex].url}
                className="media-item"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={videos[currentVideoIndex].title}
              ></iframe>
            </div>

            <button onClick={handleNextVideo} className="arrow-btn">
              &gt; {/* Right Arrow */}
            </button>
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default Media;
