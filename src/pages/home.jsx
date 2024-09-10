import img from '../assets/home.jpg';
import {FaYoutube, FaFacebook} from 'react-icons/fa'


const Home = () => {
  return(
      <div  id='home-container' className='w-full h-screen flex flex-col pt-40 pb-32 bg-[#8d450c] md:flex-row gap-2'>
        
         <div className='mx-4 px-8 mt-10 justify-center'>
          <p className='text-[#dde9e6] mx-auto text-xl'>Hello, and welcome to </p>
          <h1 id='name' className='text-2xl sm:text-7xl mx-auto font-bold text-[#ccd6b6]'>Fountain of fire</h1>
          <h2 id='surname' className='text-2xl sm:text-7xl mx-auto font-bold text-[#ccd6b6]'>Ministry</h2>
          <p className='text-[#bdc3d4] py-4 max-w-[700px]'>
         We are glad you're here. whether you're exploring faith or
          looking for a church to call home. we are excited to share 
          the love o christ with you. Come as you are, and experince a community 
         that lovwa pray , and grow together.
          </p>
          <div className='flex flex-raw justify-center'>
          <a href='#' className='mx-4 '>
            <FaFacebook  size={60} color='white'/>
          </a>
          <a href='#' className='mx-4'>
            <FaYoutube size={60} color='white' />
          </a>
          </div>
          </div>
          <img id='img' src={img} className=' px-8 mb-6'  max-width='70%' alt='home' />
        </div>
      
     

  )
}
; export default Home
