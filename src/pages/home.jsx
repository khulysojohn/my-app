import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import img from '../assets/home.jpg';
import { FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal('#text-content', {
      origin: 'left',
      distance: '100px',
      duration: 1000,
      delay: 300,
      reset: true,
    });
    ScrollReveal().reveal('#img', {
      origin: 'right',
      distance: '100px',
      duration: 1000,
      delay: 300,
      reset: true,
    });
  }, []);

  return (
    <div id="home-container" className="w-full h-screen flex flex-col pt-40 pb-32 bg-[#8d450c] md:flex-row gap-2">
      <div id="text-content" className="mx-4 px-8 mt-10 pb-8 h-fit text-orange-200 justify-center">
        <p className="mx-auto text-xl">Hello, and welcome to </p>
        <h1 id="name" className="text-2xl sm:text-7xl py-2 mx-auto font-bold">Fountain of Fire</h1>
        <h2 id="surname" className="text-2xl sm:text-7xl mx-auto font-bold">Ministry</h2>
        <p className="py-8 max-w-[700px]">
          We are glad you're here. Whether you're exploring faith or looking for a church to call home, we are excited to share 
          the love of Christ with you. Come as you are, and experience a community that loves to pray and grow together.
        </p>
        <div className="flex flex-row justify-center">
          <a href="https://web.facebook.com/FountainOfFireMinistrySA" className="mx-4">
            <FaFacebook size={60} color="white" />
          </a>
          <a href="https://youtube.com/@fountainoffireministrysa" className="mx-4">
            <FaYoutube size={60} color="white" />
          </a>
          <a href="https://www.tiktok.com/@fountainministry" className="mx-4">
            <FaTiktok size={60} color="white" />
          </a>
        </div>
      </div>
      <div className='w-50%'>
      <img id="img" src={img} className="px-8 mb-6" width="85%" alt="home" />
      </div>
     
    </div>
  );
};

export default Home;
