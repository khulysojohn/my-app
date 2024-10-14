import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal('#contact-form', {
      origin: 'right',
      distance: '100px',
      duration: 1000,
      delay: 300,
      reset: true,
    });
  }, []);

  return (
    <div className='w-full h-100% bg-[#8d450c] flex justify-center items-center pt-40'>
      <div id="contact-form" className='flex flex-col w-full text-orange-200 justify-center items-center pb-6 px-4'>
        <form className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4'>Contact</p>
            <p className='py-4'>Feel free to get in touch, we'd love to hear from you!</p>
          </div>
          <input
            className='p-2'
            type='text'
            placeholder='Name'
            name="User_name"
          />
          <input
            className='my-4 p-2'
            type='email'
            placeholder='Email'
            name="User_email"
          />
          <textarea
            className='p-2 text-gray-700'
            name="message"
            rows='10'
            placeholder='Message'
          />
          <input
            type='submit'
            value="Get in touch"
            className='text-gray-700 border-2 bg-[#cea548] hover:text-black px-4 py-3 my-8 mx-auto flex'
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
