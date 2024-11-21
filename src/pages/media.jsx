import React, { useState, useEffect, useMemo  } from 'react';
import ScrollReveal from 'scrollreveal';

const Media = () => {
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Array of Sirv image URLs
  const pictures = useMemo( () => [
    'https://khulyso-john.sirv.com/Fountain/images/img1.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img2.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img3.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img4.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img5.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img6.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img7.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img8.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img9.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img10.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img11.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img13.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img14.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img15.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img16.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/img18.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/pic-1.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/pic-4.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/pic-5.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/pic-8.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/pic-9.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/pic-11.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/pic-14.jpg',
    'https://khulyso-john.sirv.com/Fountain/images/pic-13.jpg'
    // Add more image URLs as needed
  ],
   []
);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPicIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [pictures]);

  useEffect(() => {
    ScrollReveal().reveal('.gallery-section', {
      distance: '100px',
      origin: 'up',
      duration: 2000,
      reset: true,
    });

    ScrollReveal().reveal('.video-embed', {
      distance: '100px',
      origin: 'right',
      duration: 2000,
      reset: true,
    });
  }, []);

  const videos = [
    {
      title: 'Video 1',
      url: 'https://www.youtube.com/embed/SuWpBuVHqQo?si=Y4DWL9lY8XMFiHSH&amp',
    },
    {
      title: 'Video 2',
      url: 'https://www.youtube.com/embed/_W-Cpa5EhUw?si=Dr6kW-pqTtmAe65y&amp',
    },
    {
      title: 'Video 3',
      url: 'https://www.youtube.com/embed/_sHkEVBxBMA?si=likKVje7FqufpUSJ',
    },
  ];

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="media-page w-100% h-100vh pt-32 pb-20 bg-[#8d450c] flex flex-col md:flex-row gap-4 w-screen justify-between items-center">
      <div className="gallery-section px-8 justify-center text-center">
        <h2 className="font-bold text-orange-200 mb-4">Recent Gallery</h2>
        {pictures.length > 0 ? (
          <img
            src={pictures[currentPicIndex]}
            alt="Slideshow"
            className="media-item"
          />
        ) : (
          <p>No images available</p>
        )}
      </div>

      <div className="gallery-section px-8 pt-11 justify-center text-center">
        <h2 className="font-bold text-orange-200 mb-4">Recent videos</h2>
        <div className="media-item w-full md:w-auto">
          <iframe
            src={videos[currentVideoIndex].url}
            allowFullScreen
            title={videos[currentVideoIndex].title}
          ></iframe>
        </div>
        <button onClick={handlePreviousVideo} className="arrow-btn">
          &lt;
        </button>
        <button onClick={handleNextVideo} className="arrow-btn">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Media;

