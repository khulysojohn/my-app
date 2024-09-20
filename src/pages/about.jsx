import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal('#about-content', {
      origin: 'top',
      distance: '100px',
      duration: 1000,
      delay: 300,
      reset: true,
    });
  }, []);

  return (
    <div id="about-content" className="w-full h-100% text-orange-200 px-8 pt-40 bg-[#8d450c] md:h-screen pb-20">
      <div>
        <h1 className="text-2xl text-center font-bold mt-4 underline">About Us</h1>
        <p>
          Founded in 2008 by Pastor Munyai, Fountain of Fire Ministry is a vibrant community rooted in faith,
          love, and spiritual growth. We are committed to helping individuals experience the transformative
          power of God and empowering them to live victorious lives.
        </p>
      </div>
      <div>
        <h2 className="text-2xl mt-4 text-center font-bold underline">Our Mission</h2>
        <p>
          Our mission is to ignite a passion for God and His Word, bringing spiritual revival to communities
          through powerful preaching, heartfelt worship, and compassionate outreach. We are dedicated to nurturing
          disciples who impact the world with God’s love and truth.
        </p>
      </div>
      <div>
        <h2 className="text-2xl mt-4 text-center font-bold underline">Our Vision</h2>
        <p>
          Our vision is to be a fountain of spiritual renewal, where people from all walks of life are
          transformed by the fire of the Holy Spirit. We strive to build a Christ-centered church that
          equips believers to fulfill their divine purpose, while reaching out to the lost and brokenhearted
          with the message of hope, healing, and salvation.
        </p>
      </div>
    </div>
  );
};

export default About;
